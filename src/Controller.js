import Weather from './model/Weather';

const GEOLOCATION_BY_IP_URL = 'http://ip-api.com/json';
const APIXU_API_KEY = '7297b637fde44b36ad2153805171109';

function fetchJSON(response) {
    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
}

export default class Controller {
    fetchWeather() {
        return new Promise((resolve, reject) => {

            fetch(GEOLOCATION_BY_IP_URL)
                .then(fetchJSON)
                .then(({status, lat, lon, message}) => {
                    if (status === 'fail') {
                        throw new Error(`Location detection error: ${message}`);
                    }
                    return fetch(`http://api.apixu.com/v1/current.json?key=${APIXU_API_KEY}&q=${lat},${lon}`);
                })
                .then(fetchJSON)
                .then(weatherJSON => {
                    this.currentWeather = new Weather(weatherJSON);
                    resolve(this.currentWeather);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    getCurrentWeather() {
        return this.currentWeather;
    }
}