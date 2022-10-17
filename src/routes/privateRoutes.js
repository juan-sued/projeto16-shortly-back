import { Router } from 'express';
import shortenMiddleware from '../middlewares/shortenMiddleware.js';
import shortenURLController from '../controllers/shortenURLController.js';
import deleteShortenUrlMiddleware from '../middlewares/deleteShortenUrlMiddleware.js';
import deleteShortenController from '../controllers/deleteShortenController.js';
import getMyURLMiddleware from '../middlewares/getMyUrlsMiddleware.js';
import getMyUrlsController from '../controllers/getMyUrlController.js';
const router = Router();

router.post('/urls/shorten', shortenMiddleware, shortenURLController);
router.delete('/urls/:id', deleteShortenUrlMiddleware, deleteShortenController);
router.get('/users/me', getMyURLMiddleware, getMyUrlsController);

export default router;
