import express, { Router } from 'express';
import { addAstronautController, deleteAstronautController, getAstronautsController } from '../controllers/astronauts';

const router: Router = express.Router();

router.get('/', getAstronautsController);

router.delete('/:astronautId', deleteAstronautController);

router.post('/', addAstronautController);

export default router;
