// PACKAGE IMPORTS
import dayjs from 'dayjs';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// FUNCTIONS
async function createTransaction(req, res) {
  try {
    const { session } = res.locals;

    await db.collection('transactions').insertOne({
      ...req.body,
      date: dayjs().toISOString(),
      userId: session.userId,
    });

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// VALUE EXPORTS
export default createTransaction;
