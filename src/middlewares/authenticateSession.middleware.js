// VALUE IMPORTS
import { db } from '../database/database.connection.js';

// FUNCTIONS
async function authenticateSession(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  try {
    const session = await db.collection('sessions').findOne({ token });
    if (!session) return res.sendStatus(401);
    res.locals.session = session;

    return next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// VALUE EXPORTS
export default authenticateSession;
