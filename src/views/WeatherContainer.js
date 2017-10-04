import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import Reload from './Reload';
import './WeatherContainer.css';

export default function WeatherContainer({weather, reload}) {
    return(
        <div className = 'weather'>
            <div className = 'weather__icon'>
                <img className = 'weather__img' src = {weather.getIconPath()} alt = {weather.getWeatherText()}/>
            </div>
            <div className = 'weather__temperature'>
                <WeatherTemperature weather = {weather} />
            </div>
            <div className = 'weather__text'>
                {weather.getWeatherText()}
            </div>
            <div className = 'weather__updated'>
                Updated:&nbsp;{weather.getLastUpdated()}
            </div>
            <div className = 'weather__reload'>
                <Reload reload = {reload} />
            </div>
        </div>
    );
};