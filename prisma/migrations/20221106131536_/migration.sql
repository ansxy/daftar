-- AlterTable
ALTER TABLE "users" ADD COLUMN     "about" TEXT;

-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "about" TEXT,
    "contact" TEXT,
    "experince" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserData" ADD CONSTRAINT "UserData_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
