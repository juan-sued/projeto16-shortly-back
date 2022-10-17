import { Router } from 'express';

import goToShortUrlController from '../controllers/goToShortUrlController.js';

import signInController from '../controllers/signInController.js';
import signUpController from '../controllers/signUpController.js';
import getURLByIdMiddleware from '../middlewares/getURLByIdMiddleware.js';
import goToShortUrlMiddleware from '../middlewares/goToShortUrlMiddleware.js';
import signInMiddleware from '../middlewares/signInMiddleware.js';

import signUpMiddleware from '../middlewares/signUpMiddleware.js';

const router = Router();

router.post('/signup', signUpMiddleware, signUpController);
router.post('/signin', signInMiddleware, signInController);
router.get('/urls/:id', getURLByIdMiddleware, getUrlByIdController);
router.get('urls/open/:shortUrl', goToShortUrlMiddleware, goToShortUrlController);

export default router;
