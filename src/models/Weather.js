import mongoose from 'mongoose';
const { Schema } = mongoose;

const weatherModelData = new Schema({
  city: String,
  temp: Number, 
  tempMax: Number,
  tempMin: Number, 
  humidity: Number, 
  feels_like: Number
});

export const weatherModel = mongoose.model("weathers", weatherModelData);
