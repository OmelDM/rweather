import React from 'react';
import './WeatherTemperature.css';

export default class WeatherTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'C'
        };
        this.toogleScale = this.toogleScale.bind(this);
    }

    toogleScale() {
        this.setState(prevState => {
            const newScale = prevState.scale === 'C' ? 'F' : 'C';
            return {scale: newScale};
        });
    }

    render() {        
        return(
            <div className = 'temperature'>
                <div className = 'temperature__value'>
                    {this.state.scale === 'C' ? this.props.weather.getTemperatureInCelsius() : this.props.weather.getTemperatureInFahrenheit()}
                    &deg;{this.state.scale}
                </div>
                <div className = 'temperature__scale'>
                    (Show in &nbsp;
                    <button
                        className = 'temperature__toogle'
                        onClick = {this.toogleScale}>{this.state.scale === 'C' ? 'Fahrenheit' : 'Celsius'}
                    </button>
                    )
                </div>
    
            </div>
        );
    }
};