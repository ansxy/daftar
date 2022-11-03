const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export default async function handler(req, res) {
  const { vacanyName, descVacany, reqVacany, companyId } = req.body;
  try {
    const user = await prisma.User.findFirst({
      where: {
        id: companyId,
      },
    });
    if (user.Status == "Company") {
      const Vacany = await prisma.Vacany.create({
        data: {
          VacanyName: vacanyName,
          DescVacany: descVacany,
          ReqVacany: reqVacany,
          companyId: user.id,
        },
      });
      return res.status(201).json({ vacanId: Vacany.id });
    } else {
      console.log("User is not Company");
    }
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
