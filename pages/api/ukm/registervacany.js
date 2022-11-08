import multer from "multer";
import prisma from "../../../lib/prisma/prisma";
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "assets/ktp"));
  },
  filename: (req, file, cb) => {
    const { name } = req.body;
    cb(null, `${name}.jpg`);
  },
});

export default async function handler(req, res) {
  const ktpImgStorage = multer({ storage });
  ktpImgStorage.single("image");

  if (req.method === "GET") {
    try {
      const vacany = await prisma.vacany.findMany();

      return res.status(200).json({ vacany });
    } catch (e) {
      console.log(e);
    }
  }
  if (req.method === "POST") {
    const { name, description, requirements, email, expires } = req.body;
    try {
      const Vacany = await prisma.Vacany.create({
        data: {
          name: name,
          description: description,
          AuthorOrganizationEmail: email,
          requirements: requirements,
          expires: expires,
        },
      });
      return res.status(201).json({ Vacany: Vacany });
    } catch (err) {
      console.log(err);
      return res.status(500);
    }
  }
}
