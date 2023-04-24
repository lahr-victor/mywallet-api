// PACKAGE IMPORTS
import cors from 'cors';
import express from 'express';

// VALUE IMPORTS
import router from './routes/index.route.js';

// SERVER CONFIG
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// FUNCTIONS
app.listen(process.env.PORT, () => console.log(`Running server on port ${process.env.PORT}!`));
