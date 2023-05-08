import { astronauts } from '@prisma/client';
import { isValidAstronaut } from '../../src/utils/isValidAstronaut';

describe('isValidAstronaut', () => {
  it('should return true when astronaut is valid', () => {
    const astronaut = {
      name: 'John Doe',
      imageUrl: 'https://example.com/john_doe.png',
    };

    expect(isValidAstronaut(astronaut as astronauts)).toBe(true);
  });

  it('should return false when name is missing', () => {
    const astronaut = {
      imageUrl: 'https://example.com/john_doe.png',
    };

    expect(isValidAstronaut(astronaut as astronauts)).toBe(false);
  });

  it('should return false when imageUrl is missing', () => {
    const astronaut = {
      name: 'John Doe',
    };

    expect(isValidAstronaut(astronaut as astronauts)).toBe(false);
  });

  it('should return true when all optional fields are missing', () => {
    const astronaut = {
      name: 'John Doe',
      imageUrl: 'https://example.com/john_doe.png',
    };

    expect(isValidAstronaut(astronaut as astronauts)).toBe(true);
  });
});
