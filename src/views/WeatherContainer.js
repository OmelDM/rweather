import React from 'react';

export default function WeatherContainer({weather}) {
    return(
        <div>
            <h1>WEATHER</h1>
            <p>{weather.getTemperatureInCelsius()}</p>
            <p>{weather.getLastUpdated()}</p>
            <img src={weather.getIconPath()} alt={weather.getWeatherText()}/>
        </div>
    );
};