import Weather from '../models/Weather.js';

export const getWeatherData = async (req, res) => {
    console.log("Sending data to client...");
    
    try {
        const data = await Weather.find({});
        res.json(data);
        console.log("Data sent.");
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: error.message });
    }
};

export const saveWeatherInfo = async (req, res) => {
    console.log("Receiving data from client...");
    console.log(req.body);

    try {
        const weatherInfo = new Weather({
            city: req.body.city,
            temp: req.body.temp,
            tempMax: req.body.tempMax,
            tempMin: req.body.tempMin,
            humidity: req.body.humidity,
            feels_like: req.body.feels_like
        });

        await weatherInfo.save();
        console.log("Data saved.", weatherInfo);
        res.status(201).json({ message: "Data saved successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};