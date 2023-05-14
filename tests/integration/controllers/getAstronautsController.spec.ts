import { Response, Request } from 'express';
import { getAstronautsController } from '../../../src/controllers/astronauts';
import { getAstronauts } from '../../../src/models/astronauts';

jest.mock('../../../src/models/astronauts');

describe('getAstronautsController', () => {
  beforeEach(() => {
    (res.json as jest.Mock).mockClear();
    (res.status as jest.Mock).mockClear();
  });

  const req = {
    query: {},
  };

  const res = {
    json: jest.fn(),
    status: jest.fn(() => res),
  } as unknown as Response;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call getAstronauts with correct parameters', async () => {
    (getAstronauts as jest.Mock).mockResolvedValueOnce({ astronauts: [], totalCount: 0 });

    req.query = { page: '1', limit: '10' };
    await getAstronautsController(req as Request, res);

    expect(getAstronauts).toHaveBeenCalledWith('1', '10');
  });

  it('should return astronauts as JSON', async () => {
    const data = {
      astronauts: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          missions: [],
        },
      ],
      totalCount: 1,
    };

    (getAstronauts as jest.Mock).mockResolvedValueOnce(data);

    await getAstronautsController(req as Request, res);

    expect(res.json).toHaveBeenCalledWith(data);
  });

  it('should return error as JSON if getAstronauts throws error', async () => {
    const error = new Error('Some error');

    (getAstronauts as jest.Mock).mockRejectedValueOnce(error);

    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    } as unknown as Response;

    await getAstronautsController(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
