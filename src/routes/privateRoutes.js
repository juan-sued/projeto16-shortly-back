import { Router } from 'express';
import shortenMiddleware from '../middlewares/shortenMiddleware.js';
import shortenURLController from '../controllers/shortenURLController.js';
const router = Router();

router.post('/urls/shorten', shortenMiddleware, shortenURLController);

export default router;
