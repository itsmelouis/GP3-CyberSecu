import express from 'express';

import meController from './controllers/meController.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.get(
  '/me',
  authMiddleware,
  meController,
);

export default userRouter;
