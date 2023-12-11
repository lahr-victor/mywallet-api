import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { db } from '../database/database.connection.js';

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });
    if (user) return res.status(409).send('This e-mail address is already in use!');

    const hash = bcrypt.hashSync(password, 10);
    await db.collection('users').insertOne({ name, email, password: hash });
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });
    if (!user) return res.status(404).send('This e-mail address is not registered!');

    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) return res.status(401).send('Password is incorrect! Please try again.');

    const token = uuid();
    await db.collection('sessions').insertOne({ token, userId: user._id });
    return res.status(200).send({ token, user: user.name });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
