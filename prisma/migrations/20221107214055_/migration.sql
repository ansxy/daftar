-- AlterTable
ALTER TABLE "vacanys" ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL DEFAULT '2020-03-19 14:21:00 +02:00';

-- CreateTable
CREATE TABLE "DataRegistration" (
    "id" TEXT NOT NULL,
    "motlet" TEXT NOT NULL,
    "cvkreatif" TEXT,
    "ktm" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vacanyId" TEXT NOT NULL,
    "emailUser" TEXT NOT NULL,

    CONSTRAINT "DataRegistration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DataRegistration" ADD CONSTRAINT "DataRegistration_vacanyId_fkey" FOREIGN KEY ("vacanyId") REFERENCES "vacanys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataRegistration" ADD CONSTRAINT "DataRegistration_emailUser_fkey" FOREIGN KEY ("emailUser") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
