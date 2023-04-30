import { Router, Request, Response } from "express";
const router = Router();
import Astronaut, { AstronautMap } from "../models/astronaut";
import database from "../database";

// GET - astronauts
router.get("/", async (req: Request, res: Response) => {
  // TO DO
  AstronautMap(database);
  const result = await Astronaut.findAll();
  res.status(200).json({ astronauts: result });
});

export default router;
