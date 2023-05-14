import { getAstronauts } from '../../../src/models/astronauts';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  __esModule: true,
  default: {
    astronauts: {
      findMany: jest.fn(),
      count: jest.fn(),
    },
  },
}));

describe('getAstronauts', () => {
  beforeEach(() => {
    (prisma.astronauts.findMany as jest.Mock).mockClear();
    (prisma.astronauts.count as jest.Mock).mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return astronauts and total count', async () => {
    const mockAstronauts = [
      { id: 1, firstName: 'John', lastName: 'Doe', mission: { id: 1, name: 'Apollo 11' } },
      { id: 2, firstName: 'Jane', lastName: 'Doe', mission: { id: 2, name: 'SpaceX Demo-2' } },
    ];
    const mockTotalCount = 2;

    (prisma.astronauts.findMany as jest.Mock).mockResolvedValueOnce(mockAstronauts);
    (prisma.astronauts.count as jest.Mock).mockResolvedValueOnce(mockTotalCount);

    const result = await getAstronauts('1', '2');

    expect(prisma.astronauts.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: 2,
      include: { mission: true },
    });
    expect(prisma.astronauts.count).toHaveBeenCalled();
    expect(result.astronauts).toEqual(mockAstronauts);
    expect(result.totalCount).toEqual(mockTotalCount);
    expect(result.totalPages).toEqual(1);
  });

  it('should return default page and limit values if not provided', async () => {
    const mockAstronauts = [{ id: 1, firstName: 'John', lastName: 'Doe', mission: { id: 1, name: 'Apollo 11' } }];
    const mockTotalCount = 1;

    (prisma.astronauts.findMany as jest.Mock).mockResolvedValueOnce(mockAstronauts);
    (prisma.astronauts.count as jest.Mock).mockResolvedValueOnce(mockTotalCount);

    const result = await getAstronauts(undefined, undefined);

    expect(prisma.astronauts.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: 9,
      include: { mission: true },
    });
    expect(prisma.astronauts.count).toHaveBeenCalled();
    expect(result.astronauts).toEqual(mockAstronauts);
    expect(result.totalCount).toEqual(mockTotalCount);
    expect(result.totalPages).toEqual(1);
  });

  it('should throw an error if database query fails', async () => {
    const mockError = new Error('Failed to fetch data.');

    (prisma.astronauts.findMany as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getAstronauts('1', '2')).rejects.toThrowError(mockError);
  });
});
