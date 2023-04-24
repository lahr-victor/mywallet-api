// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import authenticateSession from '../middlewares/authenticateSession.middleware.js';
import transactionSchema from '../schemas/transactions.schema.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';
import { createTransaction, retrieveTransactions } from '../controllers/transactions.controller.js';

// GLOBAL CONSTANTS
const transactionsRouter = Router();

// FUNCTIONS
transactionsRouter.use(authenticateSession);
transactionsRouter.post('/transactions', validateSchema(transactionSchema), createTransaction);
transactionsRouter.get('/transactions', retrieveTransactions);

// VALUE EXPORTS
export default transactionsRouter;
