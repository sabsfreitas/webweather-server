import mongoose from 'mongoose';
const { Schema } = mongoose;

const weatherModelData = new Schema({
  lat: String,
  lon: String,
  temp: Number, 
  tempMax: Number,
  tempMin: Number, 
  humidity: Number, 
  feels_like: String,
  icon: String
});

export const weatherModel = mongoose.model("weathers", weatherModelData);