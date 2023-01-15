-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MAHASISWA', 'ORGANISASI', 'UKM');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MAHASISWA';

-- CreateTable
CREATE TABLE "vacanys" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "landscapeImage" TEXT,
    "AuthorOrganizationEmail" TEXT NOT NULL,

    CONSTRAINT "vacanys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vacanys" ADD CONSTRAINT "vacanys_AuthorOrganizationEmail_fkey" FOREIGN KEY ("AuthorOrganizationEmail") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
