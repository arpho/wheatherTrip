import { WeatherResponse } from "../models/interfaces/weather";
import { SettingsData } from "./settings-data";
import { convertFromKelvin } from "../helpers/utils";
class WeatherDataController {
public data: WeatherResponse;
private apiKey: string = "YOUR_API_KEY_HERE";
constructor() {}
async load() {}
async refreshWeather() {}
processData(data: WeatherResponse, unit: string) {}
async getCurrentWeather() {}
}
export const WeatherData = new WeatherDataController();