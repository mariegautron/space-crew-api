import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  const missions = [
    {
      name: "Course-poursuite autour de la Lune",
    },
    {
      name: "Collecte d'échantillons sur Mars",
    },
    {
      name: "Installation d'une base lunaire permanente",
    },
  ];

  const astronauts = [
    {
      name: "Buzz Lightbeer",
      missionId: 1,
    },
    {
      name: "Sandra Stardust",
      missionId: 2,
    },
    {
      name: "Yuri Gagarlic",
      missionId: 3,
    },
    {
      name: "Neil Armstraw",
      missionId: 1,
    },
  ];

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
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
