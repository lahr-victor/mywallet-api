import dayjs from 'dayjs';

import { db } from '../database/database.connection.js';

export async function createTransaction(req, res) {
  const { session } = res.locals;

  const { value, description, type } = req.body;
  const transaction = {
    value: (Number(value)),
    description,
    type,
    date: dayjs().toISOString(),
    userId: session.userId,
  }

  try {
    await db.collection('transactions').insertOne(transaction);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function retrieveTransactions(req, res) {
  try {
    const { session } = res.locals;

    const transactions = (
      await db.collection('transactions')
        .find({ userId: session.userId })
        .sort({ date: -1 })
        .toArray()
    );
    return res.send(transactions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
