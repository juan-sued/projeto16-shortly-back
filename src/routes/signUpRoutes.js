import { Router } from 'express';
import { registerUser } from '../controllers/signUpController.js';
import ValidateNewUser from '../middlewares/signUpMiddleware.js';

const router = Router();

router.post('/sign-up', ValidateNewUser, registerUser);

export default router;
