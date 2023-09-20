import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the PORT environment variable if it exists, otherwise default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});