import { Request, Response } from 'express';
import {
  AstronautsPagination,
  addAstronaut,
  deleteAstronaut,
  getAstronautById,
  getAstronauts,
  updateAstronaut,
} from '../models/astronauts';
import { isValidAstronautId } from '../utils/isValidAstronautId';
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
    return res.status(500).json({ error: (error as Error).message });
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
  if (!astronaut || !isValidAstronaut(astronaut)) {
    res.status(400).json({ error: 'Invalid astronaut object in request body' });
  }

  try {
    const data = await addAstronaut(astronaut);
    res.json(data);
  } catch (error) {
    console.error(`Failed to add astronaut: ${error}`);
    res.status(500).json({ error: 'Failed to add astronaut' });
  }
}

export async function updateAstronautController(req: Request, res: Response): Promise<Response | Error> {
  const { astronautId } = req.params;
  const { astronaut } = req.body;

  const astronautIdNumber = Number(astronautId);

  if (!astronautId || isNaN(astronautIdNumber)) {
    return res.status(400).json({
      message: `${astronautId} ${isNaN(astronautIdNumber)} ${typeof astronautId}`,
    });
  }

  if (!astronaut || !isValidAstronaut(astronaut)) {
    return res.status(400).json({ error: 'Invalid astronaut object in request body' });
  }

  try {
    const updatedAstronaut = await updateAstronaut(astronautIdNumber, astronaut);

    if (updatedAstronaut === null) {
      return res.status(404).json({ message: `Astronaut with ID ${astronautIdNumber} not found.` });
    }

    return res.status(200).json(updatedAstronaut);
  } catch (error) {
    console.error(`Failed to update astronaut: ${error}`);
    return res.status(500).json({ error: 'Failed to update astronaut' });
  }
}

export async function getAstronautByIdController(req: Request, res: Response): Promise<Response | Error> {
  const { astronautId } = req.params;

  const astronautIdNumber = Number(astronautId);

  if (!astronautId || isNaN(astronautIdNumber)) {
    return res.status(400).json({
      message: `${astronautId} ${isNaN(astronautIdNumber)} ${typeof astronautId}`,
    });
  }

  if (!isValidAstronautId(astronautIdNumber)) {
    return res.status(404).json({ message: `Astronaut with ID ${astronautIdNumber} not found.` });
  }

  try {
    const astronaut = await getAstronautById(astronautIdNumber);

    if (astronaut === null) {
      return res.status(404).json({ message: `Astronaut with ID ${astronautIdNumber} not found.` });
    }

    return res.status(200).json(astronaut);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get astronaut' });
  }
}
