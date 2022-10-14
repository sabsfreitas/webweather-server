import mongoose from 'mongoose';
const { Schema } = mongoose;

const weatherModelData = new Schema({
  cityName: String,
  weatherId: Number, 
  temp: Number, 
  tempMax: Number,
  tempMin: Number, 
  humidity: Number, 
  feels_like: Number
});

export const weatherModel = mongoose.model("weathers", weatherModelData);