import mongoose from 'mongoose';

const { Schema } = mongoose;

const weatherSchema = new Schema({
  city: String,
  temp: Number, 
  tempMax: Number,
  tempMin: Number, 
  humidity: Number, 
  feels_like: Number
});

const Weather = mongoose.model("Weather", weatherSchema);

export default Weather;