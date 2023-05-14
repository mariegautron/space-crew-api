import { astronauts } from '@prisma/client';
import prisma from '../prisma';

export interface AstronautsPagination {
  astronauts: astronauts[];
  totalCount: number;
  totalPages: number;
}

export async function getAstronauts(
  page: string | undefined,
  limit: string | undefined,
): Promise<AstronautsPagination> {
  const currentPageNumber = page ? parseInt(page) : 1;
  const resultsPerPage = limit ? parseInt(limit) : 9;

  try {
    const [astronauts, totalCount] = await Promise.all([
      prisma.astronauts.findMany({
        skip: resultsPerPage * (currentPageNumber - 1),
        take: resultsPerPage,
        include: { mission: true },
      }),
      prisma.astronauts.count(),
    ]);

    const totalPages = Math.ceil(totalCount / resultsPerPage);

    return { astronauts, totalCount, totalPages };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred.');
  }
}

export async function deleteAstronaut(id: number) {
  try {
    const astronaut = await prisma.astronauts.delete({
      where: {
        id: id,
      },
    });
    return astronaut;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred.');
  }
}

export async function addAstronaut(astronaut: astronauts) {
  try {
    const newAstronaut = await prisma.astronauts.create({
      data: astronaut,
    });
    return newAstronaut;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred.');
  }
}

export async function updateAstronaut(id: number, updatedAstronaut: astronauts) {
  try {
    const updated = await prisma.astronauts.update({
      where: { id },
      data: { ...updatedAstronaut },
    });
    return updated;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred.');
  }
}

export async function getAstronautById(id: number): Promise<astronauts | null> {
  try {
    const astronaut = await prisma.astronauts.findUnique({
      where: {
        id: id,
      },
    });
    return astronaut;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred.');
  }
}
