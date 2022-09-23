import  { weatherModel }  from '../models/Weather.js';
import { ObjectId } from 'mongodb';

export const getWeatherData = async(req, res) => {
    console.log("sending data to client");
    let rest = null;
    try {
        const dbs = weatherModel.db;
        const coll = dbs.collection("weathers");

        let rest = await coll.find({}).toArray();
        res.json(rest);

        console.log("data sent");
        

    } catch(error) {
        console.log("Error " + error);
        res.status(404).json({error: error.message});
    }
}

export const saveWeatherInfo = async (req, res) => {
    console.log("receiving data from client");
   
    const weatherInfo = { title: req.body.title, overview:req.body.overview };
    console.log(weatherInfo);
    try {
        const dbs = weatherModel.db;
        const coll = dbs.collection("weathers");

        const rest = await coll.insertOne(weatherInfo);
        console.log("data saved");
        res.status(200).json({ message_success: "Data saved successfully" });

    } catch(ex) {
        console.log("Error " + ex);
    }
   
}