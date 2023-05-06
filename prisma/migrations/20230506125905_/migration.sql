/*
  Warnings:

  - You are about to drop the `astronauts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `missions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "astronauts" DROP CONSTRAINT "astronauts_missionId_fkey";

-- DropTable
DROP TABLE "astronauts";

-- DropTable
DROP TABLE "missions";

-- CreateTable
CREATE TABLE "Astronaut" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "missionId" INTEGER,

    CONSTRAINT "Astronaut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Astronaut" ADD CONSTRAINT "Astronaut_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
