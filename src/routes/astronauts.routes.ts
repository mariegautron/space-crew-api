import express, { Router } from 'express';
import {
  addAstronautController,
  deleteAstronautController,
  getAstronautsController,
  updateAstronautController,
} from '../controllers/astronauts';

const router: Router = express.Router();

router.get('/', getAstronautsController);

router.delete('/:astronautId', deleteAstronautController);

router.post('/', addAstronautController);

router.put('/:astronautId', updateAstronautController);

export default router;
