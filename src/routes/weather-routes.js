import express from "express";
import { getWeatherData, saveWeatherInfo } from "../controllers/weather-controller.js";

const router = express.Router();

router.get('/', getWeatherData);
router.post('/', saveWeatherInfo);

export default router;