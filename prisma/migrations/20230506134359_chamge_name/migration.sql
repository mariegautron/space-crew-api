/*
  Warnings:

  - You are about to drop the `Astronaut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Astronaut" DROP CONSTRAINT "Astronaut_missionId_fkey";

-- DropTable
DROP TABLE "Astronaut";

-- DropTable
DROP TABLE "Mission";

-- CreateTable
CREATE TABLE "astronauts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "missionId" INTEGER,

    CONSTRAINT "astronauts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "missions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "astronauts" ADD CONSTRAINT "astronauts_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
