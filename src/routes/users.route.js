// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import signUp from '../controllers/users.controller.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';
import userSchema from '../schemas/users.schema.js';

// GLOBAL CONSTANTS
const usersRouter = Router();

// FUNCTIONS
usersRouter.post('/sign-up', validateSchema(userSchema), signUp);

// VALUE EXPORTS
export default usersRouter;
