import { PrismaClient, astronauts } from "@prisma/client";

const prisma = new PrismaClient();

export interface AstronautsPagination {
  astronauts: astronauts[];
  totalCount: number;
  totalPages: number;
}

export async function getAstronauts(
  page: string | undefined,
  limit: string | undefined
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
    throw new Error("An unknown error occurred.");
  }
}
