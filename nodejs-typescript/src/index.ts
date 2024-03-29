import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import productRouter from './route/ProductRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
