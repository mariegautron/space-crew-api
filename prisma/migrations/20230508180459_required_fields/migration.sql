/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `astronauts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Made the column `name` on table `astronauts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `astronauts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "astronauts" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(255);
