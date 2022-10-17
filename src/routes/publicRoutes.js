import { Router } from 'express';

import goToShortUrlController from '../controllers/goToShortUrlController.js';

import signInController from '../controllers/signInController.js';
import signUpController from '../controllers/signUpController.js';
import getURLByIdMiddleware from '../middlewares/getURLByIdMiddleware.js';
import goToShortUrlMiddleware from '../middlewares/goToShortUrlMiddleware.js';
import signInMiddleware from '../middlewares/signInMiddleware.js';
import getUrlByIdController from '../controllers/getUrlByIdController.js';
import signUpMiddleware from '../middlewares/signUpMiddleware.js';
import getRanksController from '../controllers/getRanksController.js';

const router = Router();

router.post('/signup', signUpMiddleware, signUpController);
router.post('/signin', signInMiddleware, signInController);
router.get('/urls/:id', getURLByIdMiddleware, getUrlByIdController);
router.get('urls/open/:shortUrl', goToShortUrlMiddleware, goToShortUrlController);
router.get('/ranking', getRanksController);
export default router;
