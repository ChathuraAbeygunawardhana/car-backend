import express from 'express';
import { Car } from '../models/carModel.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.manufactureYear ||
      !req.body.color ||
      !req.body.price
    ) {
      return res.status(400).send({ message: 'send all required fields' });
    }

    const newCar = {
      title: req.body.title,
      manufactureYear: req.body.manufactureYear,
      color: req.body.color,
      price: req.body.price,
    };

    const car = await Car.create(newCar);
    return res.status(201).send(car);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
/* route to get all cars */
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({});
    res.send(cars);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

/* route to get one car by id */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.send(car);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
/* route for deleting a  car */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByIdAndDelete(id);
  if (!car) {
    return res.json({ message: '' });
  }
});

/* route for updating a car */
router.put('/:id', async (req, res) => {
  if (
    !req.body.title ||
    !req.body.manufactureYear ||
    !req.body.color ||
    !req.body.price
  ) {
    res.status(400).send({ message: 'please send all required fields' });
  }

  const { id } = req.params();
  const result = await Car.findbyIdAndUpdate(id);

  if (!result) {
    res.status(404).send({ message: 'car not found' });
  }

  
});

export default router;
