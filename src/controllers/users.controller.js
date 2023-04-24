// PACKAGE IMPORTS
import bcrypt from 'bcrypt';

// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// FUNCTIONS
async function signUp(req, res) {
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

// VALUE EXPORTS
export default signUp;
