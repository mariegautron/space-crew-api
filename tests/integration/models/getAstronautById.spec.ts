import { getAstronautById } from '../../../src/models/astronauts';
import prisma from '../../../src/prisma';

jest.mock('../../../src/prisma', () => ({
  __esModule: true,
  default: {
    astronauts: {
      findUnique: jest.fn(),
    },
  },
}));

describe('getAstronautById', () => {
  beforeEach(() => {
    (prisma.astronauts.findUnique as jest.Mock).mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return an astronaut when given a valid id', async () => {
    const mockAstronaut = { id: 1, firstName: 'John', lastName: 'Doe', mission: { id: 1, name: 'Apollo 11' } };

    (prisma.astronauts.findUnique as jest.Mock).mockResolvedValueOnce(mockAstronaut);

    const result = await getAstronautById(1);

    expect(prisma.astronauts.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
      include: { mission: true },
    });
    expect(result).toEqual(mockAstronaut);
  });

  it('should return null when given an invalid id', async () => {
    (prisma.astronauts.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const result = await getAstronautById(10040447737738292);

    expect(prisma.astronauts.findUnique).toHaveBeenCalledWith({
      where: { id: 10040447737738292 },
      include: { mission: true },
    });
    expect(result).toBeNull();
  });

  it('should throw an error when the database query fails', async () => {
    const mockError = new Error('Failed to fetch data.');

    (prisma.astronauts.findUnique as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getAstronautById(1)).rejects.toThrowError(mockError);
  });
});
