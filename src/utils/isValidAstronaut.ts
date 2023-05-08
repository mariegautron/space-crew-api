import { astronauts } from '@prisma/client';

export function isValidAstronaut(astronaut: astronauts): boolean {
  const { name, description, pseudo, imageUrl, missionId } = astronaut;

  if (!name || typeof name !== 'string') {
    return false;
  }

  if (description && typeof description !== 'string') {
    return false;
  }

  if (pseudo && typeof pseudo !== 'string') {
    return false;
  }

  if (!imageUrl || typeof imageUrl !== 'string') {
    return false;
  }

  return true;
}
