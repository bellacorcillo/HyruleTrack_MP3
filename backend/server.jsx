import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

// Connect to MongoDB
mongoose.connect('mongodb+srv://isabellacorcillo:<Bella0224541!>@hyruletrack.k6fzqfu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});