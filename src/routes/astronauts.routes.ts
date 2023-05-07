import express, { Router } from "express";
import { getAstronautsController } from "../controllers/astronauts";

const router: Router = express.Router();

router.get("/", getAstronautsController);

export default router;
