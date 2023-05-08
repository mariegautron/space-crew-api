import { Request, Response } from 'express';
import { getAstronauts, AstronautsPagination, deleteAstronaut, addAstronaut } from '../models/astronauts';
import { astronauts } from '@prisma/client';

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
    await deleteAstronaut(astronautIdNumber);
    return res.status(204).json({ message: `${astronautIdNumber} is deleted.` });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function addAstronautController(req: Request, res: Response): Promise<Response | Error> {
  const { astronaut } = req.body;

  try {
    const data = await addAstronaut(astronaut);
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
