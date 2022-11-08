/* eslint-disable no-undef */
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, session }) {
      if (profile.hd !== "student.itk.ac.id") {
        console.log("Maaf email anda tidak terdaftar");
        return Promise.resolve("/error");
      }
      return true;
    },
    session: async ({ session, token }) => {
      try {
        const user = await prisma.User.findFirst(session.email);
        const about = await prisma.UserData.findFirst(session.email);
        session = { ...session, user, about };
        return session;
      } catch (error) {
        return Promise.resolve("error");
      }
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/login") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
  pages: {
    signIn: "/login",
  },
});
