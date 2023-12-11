import { Router } from 'express';

import usersRouter from './users.route.js';
import transactionsRouter from './transactions.route.js';

const router = Router();

router.use(usersRouter);
router.use(transactionsRouter);

export default router;
