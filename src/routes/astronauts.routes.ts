import express, { Router } from 'express';
import { deleteAstronautController, getAstronautsController } from '../controllers/astronauts';

const router: Router = express.Router();

router.get('/', getAstronautsController);

router.delete('/:astronautId', deleteAstronautController);

export default router;
