import express from 'express';
import { TaskController } from './task.controller';

const router = express.Router();

router.post('/create', TaskController.insertIntoDb);
router.get('/', TaskController.getAllData);

export const TaskRoutes = router;
