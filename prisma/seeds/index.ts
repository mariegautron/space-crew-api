import { PrismaClient } from "@prisma/client";
import { missions } from "./missions";
import { astronauts } from "./astronauts";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log("Start seeding ...");

  for (const mission of missions) {
    const createdMission = await prisma.missions.create({
      data: mission,
    });
    console.log(`Created mission with id: ${createdMission.id}`);
  }

  for (const astronaut of astronauts) {
    const createdAstronaut = await prisma.astronauts.create({
      data: astronaut,
    });
    console.log(`Created astronaut with id: ${createdAstronaut.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
