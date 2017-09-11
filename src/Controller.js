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
                .then(locationJSON => {
                    // parse json to get current lat lon
                    return fetch(`http://api.apixu.com/v1/current.json?key=${APIXU_API_KEY}&q=Kiev`);
                })
                .then(fetchJSON)
                .then(weatherJSON => {
                    // parse json to local Weather object
                    const weather = weatherJSON.current.temp_c;
                    resolve(weather);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    weather() {
        return {
            temp: 22
        };
    }
}