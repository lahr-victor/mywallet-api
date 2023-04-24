// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import authenticateSession from '../middlewares/authenticateSession.middleware.js';
import createTransaction from '../controllers/transactions.controller.js';
import transactionSchema from '../schemas/transactions.schema.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';

// GLOBAL CONSTANTS
const transactionsRouter = Router();

// FUNCTIONS
transactionsRouter.use(authenticateSession);
transactionsRouter.post('/transactions', validateSchema(transactionSchema), createTransaction);

// VALUE EXPORTS
export default transactionsRouter;
