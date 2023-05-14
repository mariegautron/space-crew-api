import express, { Router } from 'express';
import {
  addAstronautController,
  deleteAstronautController,
  getAstronautByIdController,
  getAstronautsController,
  updateAstronautController,
} from '../controllers/astronauts';

const router: Router = express.Router();

router.get('/', getAstronautsController);

router.get('/:astronautId', getAstronautByIdController);

router.delete('/:astronautId', deleteAstronautController);

router.post('/', addAstronautController);

router.put('/:astronautId', updateAstronautController);

export default router;
