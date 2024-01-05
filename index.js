import express from 'express';
import { PORT, mongoURL } from './config.js';
import mongoose from 'mongoose';
import { Car } from './models/carModel.js';
import carsRoute from './routes/carsRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('home page');
});

/* route for adding a new car */
app.use('/cars', carsRoute);
/* connecting to the mongodb database */
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log('app connected to the database');
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
