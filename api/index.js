import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Database is connected');
}).catch((err) => {
  console.log(err);
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

