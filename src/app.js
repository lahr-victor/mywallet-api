// PACKAGE IMPORTS
import cors from 'cors';
import express from 'express';

// GLOBAL CONSTANTS
const PORT_NUMBER = 5000;

// SERVER CONFIG
const app = express();
app.use(express.json());
app.use(cors());

// FUNCTIONS
app.listen(PORT_NUMBER, () => console.log(`Running server on port ${PORT_NUMBER}!`));
