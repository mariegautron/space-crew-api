import prisma from '../prisma';

export async function isValidAstronautId(id: number): Promise<boolean> {
  const astronaut = await prisma.astronauts.findUnique({
    where: { id },
  });

  return !!astronaut;
}
