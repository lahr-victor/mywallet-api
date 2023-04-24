// PACKAGE IMPORTS
import dayjs from 'dayjs';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// VALUE EXPORTS
export async function createTransaction(req, res) {
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

export async function retrieveTransactions(req, res) {
  try {
    const { session } = res.locals;

    const transactions = await db.collection('transactions').find({ userId: session.userId }).toArray();
    return res.send(transactions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
