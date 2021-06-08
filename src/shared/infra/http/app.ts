import '@config/env';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import createConnection from '../typeorm';
import '@shared/infra/mongodb';
import routes from './routes';
import path from 'path';

const app = express();

createConnection();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', '..', '..', '..', 'uploads')))

app.use(routes);

export default app;
