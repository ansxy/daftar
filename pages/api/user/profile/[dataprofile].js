import prisma from "../../../../lib/prisma/prisma";

export default async function handler(req, res) {
  const { profile } = req.query;
  if (req.method === "GET") {
    try {
      let data = await prisma.UserData.findFirst(profile);
      const user = await prisma.User.findFirst(profile);
      data = { ...data, user };
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const { about, experince, contact, email } = req.body;
      const userData = await prisma.UserData.upsert({
        where: {
          email: email,
        },
        update: {
          about: about,
          experince: experince,
          contact: contact,
        },
        create: {
          about: about,
          experince: experince,
          email: email,
          contact: contact,
        },
      });
      return res.status(201).json({ userData: userData });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
