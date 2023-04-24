// PACKAGE IMPORTS
import { Router } from 'express';

// VALUE IMPORTS
import usersRouter from './users.route.js';
import transactionsRouter from './transactions.route.js';

// GLOBAL CONSTANTS
const router = Router();

// ROUTES CONFIG
router.use(usersRouter);
router.use(transactionsRouter);

// VALUE EXPORTS
export default router;
