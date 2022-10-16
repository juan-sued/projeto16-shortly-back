import { Router } from 'express';
import signInController from '../controllers/signInController.js';
import signUpController from '../controllers/signUpController.js';
import signInMiddleware from '../middlewares/signInMiddleware.js';

import signUpMiddleware from '../middlewares/signUpMiddleware.js';

const router = Router();

router.post('/signup', signUpMiddleware, signUpController);
router.post('/signin', signInMiddleware, signInController);

export default router;
