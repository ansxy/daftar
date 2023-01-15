import prisma from "../../../../lib/prisma/prisma";

export default async function handler(req, res) {
  const { typeRole } = req.query;
  try {
    const data = await prisma.User.findFirst();
    return res.status(200).json(data.role);
  } catch (error) {
    console.log(error);
  }
}
