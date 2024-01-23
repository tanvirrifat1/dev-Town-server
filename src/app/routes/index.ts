import express from 'express';

import { AuthRoutes } from '../modules/auth/auth.routes';

import { TaskRoutes } from '../modules/task/task.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/task',
    route: TaskRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
