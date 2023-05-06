/*
  Warnings:

  - A unique constraint covering the columns `[missionId]` on the table `astronauts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "astronauts" ADD COLUMN     "missionId" INTEGER;

-- CreateTable
CREATE TABLE "missions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "missions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "astronauts_missionId_key" ON "astronauts"("missionId");

-- AddForeignKey
ALTER TABLE "astronauts" ADD CONSTRAINT "astronauts_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
