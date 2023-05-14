import { Request, Response } from 'express';
import { getAstronautByIdController } from '../../../src/controllers/astronauts';
import { getAstronautById } from '../../../src/models/astronauts';

jest.mock('../../../src/models/astronauts');

describe('getAstronautByIdController', () => {
  const mockRequest = {
    params: {
      astronautId: '1',
    },
  } as unknown as Request;

  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  } as unknown as Response;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if astronautId is not a number', async () => {
    mockRequest.params.astronautId = 'abc';
    await getAstronautByIdController(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'abc true string' });
  });

  it('should return 404 if astronaut is not found', async () => {
    (getAstronautById as jest.Mock).mockResolvedValueOnce(null);
    mockRequest.params.astronautId = '10040447737738292';
    await getAstronautByIdController(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Astronaut with ID 10040447737738292 not found.' });
  });

  it('should return the astronaut if it is found', async () => {
    (getAstronautById as jest.Mock).mockResolvedValueOnce({ id: 1, name: 'John Doe', age: 35 });
    mockRequest.params.astronautId = '1';
    await getAstronautByIdController(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, name: 'John Doe', age: 35 });
  });

  it('should return 500 if there is an error getting the astronaut', async () => {
    (getAstronautById as jest.Mock).mockRejectedValueOnce(new Error('Failed to get astronaut'));
    mockRequest.params.astronautId = '1';
    await getAstronautByIdController(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Failed to get astronaut' });
  });
});
