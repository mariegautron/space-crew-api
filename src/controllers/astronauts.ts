import { Request, Response } from 'express';
import { AstronautsPagination, addAstronaut, deleteAstronaut, getAstronauts } from '../models/astronauts';
import { isValidAstronaut } from '../utils/isValidAstronaut';

export async function getAstronautsController(
  req: Request,
  res: Response,
): Promise<Response<AstronautsPagination> | Error> {
  const { page, limit } = req.query;

  try {
    const data = await getAstronauts(page as string | undefined, limit as string | undefined);
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function deleteAstronautController(req: Request, res: Response): Promise<Response | Error> {
  const { astronautId } = req.params;

  const astronautIdNumber = Number(astronautId);

  if (!astronautId || isNaN(astronautIdNumber)) {
    return res.status(400).json({
      message: `${astronautId} ${isNaN(astronautIdNumber)} ${typeof astronautId}`,
    });
  }

  try {
    const deletedAstronaut = await deleteAstronaut(astronautIdNumber);

    if (deletedAstronaut === null) {
      return res.status(404).json({ message: `Astronaut with ID ${astronautIdNumber} not found.` });
    }

    return res.status(204).json({ message: `${astronautIdNumber} is deleted.` });
  } catch (error) {
    return res.status(500).json({ message: `An error occurred while deleting the astronaut: ${error}` });
  }
}

export async function addAstronautController(req: Request, res: Response): Promise<void> {
  const { astronaut } = req.body;

  console.log('astronaut', astronaut);

  if (!astronaut || !isValidAstronaut(astronaut)) {
    res.status(400).json({ error: 'Invalid astronaut object in request body' });
    return;
  }

  try {
    const data = await addAstronaut(astronaut);
    res.json(data);
  } catch (error) {
    console.error(`Failed to add astronaut: ${error}`);
    res.status(500).json({ error: 'Failed to add astronaut' });
  }
}
