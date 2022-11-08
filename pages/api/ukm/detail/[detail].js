import prisma from "../../../../lib/prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const detail = await prisma.vacany.findUnique({
        where: {
          id: req.query.detail,
        },
      });
      return res.status(200).json({ detail });
    } catch (e) {
      console.log(e);
    }
  }
}
