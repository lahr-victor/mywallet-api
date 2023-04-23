// PACKAGE IMPORTS
import cors from 'cors';
import express from 'express';

// VALUE IMPORTS
import router from './routes/index.route.js';

// GLOBAL CONSTANTS
const PORT_NUMBER = 5000;

// SERVER CONFIG
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// FUNCTIONS
app.listen(PORT_NUMBER, () => console.log(`Running server on port ${PORT_NUMBER}!`));
