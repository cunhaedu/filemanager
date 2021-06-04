import express from 'express';
import 'reflect-metadata';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello!' })
})

app.listen(3333, () => {
  console.log('Server is Running');
})
