import '@config/env';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import createConnection from '../typeorm';
import routes from './routes';


const app = express();

createConnection();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes);

export default app;
