import prisma from "../../../lib/prisma/prisma";

prisma;
export default async function handler(req, res) {
  if (req.method === "GET") {
    return;
  } else if (req.method === "POST") {
    return;
  }
}
