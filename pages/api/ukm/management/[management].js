import prisma from "../../../../lib/prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.vacany.findMany({
        where: {
          AuthorOrganizationEmail: "11201012@student.itk.ac.id",
        },
      });
      return res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  }
}
