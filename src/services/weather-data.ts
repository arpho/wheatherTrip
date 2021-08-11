import { WeatherResponse } from "../models/interfaces/weather";
import { SettingsData } from "./settings-data";
import { convertFromKelvin } from "../helpers/utils";
import {weatherKey} from "../configs/keys"
class WeatherDataController {
public data: WeatherResponse;
private apiKey: string = weatherKey;
constructor() {}
async load() {}
async refreshWeather() {}
processData(data: WeatherResponse, unit: string) {}
async getCurrentWeather() {}
}
export const WeatherData = new WeatherDataController();