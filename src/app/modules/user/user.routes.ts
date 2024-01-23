import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllData);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateData);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteData);
router.post('/', UserController.insertIntoDb);

export const UserRouter = router;
