import mongoose from 'mongoose';

const carSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    manufactureYear: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Car = mongoose.model('Car', carSchema);
