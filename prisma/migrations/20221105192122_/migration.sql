/*
  Warnings:

  - You are about to drop the column `image` on the `vacanys` table. All the data in the column will be lost.
  - You are about to drop the column `landscapeImage` on the `vacanys` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vacanys" DROP COLUMN "image",
DROP COLUMN "landscapeImage",
ADD COLUMN     "requirements" TEXT;
