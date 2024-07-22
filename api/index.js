import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

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

