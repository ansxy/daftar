const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export default async function handler(req, res) {
  try {
    const vacany = await prisma.vacany.findMany();
    return res.status(200).json({ vacany });
  } catch (e) {
    console.log(e);
  }
}
