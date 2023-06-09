import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get;
'/',
  (req, res) => {
    res.send('API is Running!');
  };

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta
      .bold
  )
);
