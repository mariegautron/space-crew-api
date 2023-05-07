import { Request, Response } from "express";
import { getAstronauts, AstronautsPagination } from "../models/astronauts";

export async function getAstronautsController(
  req: Request,
  res: Response
): Promise<Response<AstronautsPagination> | Error> {
  const { page, limit } = req.query;

  try {
    const data = await getAstronauts(
      page as string | undefined,
      limit as string | undefined
    );
    return res.json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
