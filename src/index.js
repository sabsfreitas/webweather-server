import express from "express";
import weatherRoutes from "./routes/weather-routes.js";
import cors from "cors";
import database from "./config/database.js";
import mongoose from "mongoose";

const app = express();
mongoose.connect(database.uri);

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Server is running" });
});

app.listen(5000, () => console.log('Server listening on port 5000'));