// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import { signUp, signIn } from '../controllers/users.controller.js';
import { signUpSchema, signInSchema } from '../schemas/users.schema.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';

// GLOBAL CONSTANTS
const usersRouter = Router();

// FUNCTIONS
usersRouter.post('/sign-up', validateSchema(signUpSchema), signUp);
usersRouter.post('/sign-in', validateSchema(signInSchema), signIn);

// VALUE EXPORTS
export default usersRouter;
