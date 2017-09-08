export default class Controller {
    fetchWeather() {
        return new Promise((resolve, reject) => {
            resolve({id: 22,name:'Some'});
        });
    }

    weather() {
        return {
            temp: 22
        };
    }
}