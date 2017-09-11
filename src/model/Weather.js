export default class Weather {
    constructor(weatherJSON) {
        this.weather = weatherJSON.current;
    }

    getTemperatureInCelsius() {
        return this.weather.temp_c;
    }

    getTemperatureInFahrenheit() {
        return this.weather.temp_f;
    }

    getLastUpdated() {
        return this.weather.last_updated;
    }

    getIconPath() {
        return this.weather.condition.icon;
    }

    getWeatherText() {
        return this.weather.condition.text;
    }
}