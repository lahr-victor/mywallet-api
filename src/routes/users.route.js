import { Router } from 'express';

import { signUp, signIn } from '../controllers/users.controller.js';
import { signUpSchema, signInSchema } from '../schemas/users.schema.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';

const usersRouter = Router();

usersRouter.post('/sign-up', validateSchema(signUpSchema), signUp);
usersRouter.post('/sign-in', validateSchema(signInSchema), signIn);

export default usersRouter;
