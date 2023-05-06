import { Router, Request, Response } from "express";
const router = Router();

const prisma = require("../prisma");

// GET - astronauts
router.get("/", async (req: Request, res: Response) => {
  try {
    const astronauts = await prisma.astronauts.findMany();
    return res.json(astronauts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
