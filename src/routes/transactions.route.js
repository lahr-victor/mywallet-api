import { Router } from 'express';

import authenticateSession from '../middlewares/authenticateSession.middleware.js';
import transactionSchema from '../schemas/transactions.schema.js';
import validateSchema from '../middlewares/validadeSchema.middleware.js';
import { createTransaction, retrieveTransactions } from '../controllers/transactions.controller.js';

const transactionsRouter = Router();

transactionsRouter.use(authenticateSession);
transactionsRouter.post('/transactions', validateSchema(transactionSchema), createTransaction);
transactionsRouter.get('/transactions', retrieveTransactions);

export default transactionsRouter;
