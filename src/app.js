import cors from 'cors';
import express from 'express';

import router from './routes/index.route.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => console.log(`Running server on port ${process.env.PORT}!`));
