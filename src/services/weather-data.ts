import { WeatherResponse } from "../models/interfaces/weather";
import { SettingsData } from "./settings-data";
import { convertFromKelvin } from "../helpers/utils";
import {weatherKey} from "../configs/keys"
class WeatherDataController {
public data: WeatherResponse;
private apiKey: string = weatherKey;
constructor() {}
async load() {
    if (this.data) {
    return this.data;
    } else {
    return await this.refreshWeather();
    }
    }

    async refreshWeather() {
        let [location, unit] = await Promise.all([
        SettingsData.getLocation(),
        SettingsData.getTemperatureUnit()
        ]);
        let response;
        try {
        if (location.useCoords) {
        response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?
        lat=${location.lat}&lon=${
        location.lng
        }&APPID=${this.apiKey}`
        );
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        } else {
        response = await fetch( `https://api.openweathermap.org/data/2.5/weather?
        q=${location.name}&APPID=${this.apiKey}`
        );
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        }
        } catch (err) {
        return Promise.reject(err);
        }
        let weatherData = await response.json();
        return this.processData(weatherData, unit);
        }


processData(data: WeatherResponse, unit: string) {}
async getCurrentWeather() {}
}
export const WeatherData = new WeatherDataController();