const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { typeRole } = req.query;
  try {
    const data = await prisma.User.findFirst(typeRole);
    return res.status(200).json(data.role);
  } catch (error) {
    console.log(error);
  }
}
