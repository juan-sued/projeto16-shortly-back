import { Router } from 'express';
import shortenMiddleware from '../middlewares/shortenMiddleware.js';
import shortenURLController from '../controllers/shortenURLController.js';
import deleteShortenUrlMiddleware from '../middlewares/deleteShortenUrlMiddleware.js';
import deleteShortenController from '../controllers/deleteShortenController.js';
const router = Router();

router.post('/urls/shorten', shortenMiddleware, shortenURLController);
router.delete('/urls/:id', deleteShortenUrlMiddleware, deleteShortenController);

export default router;
