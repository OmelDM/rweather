import React, { Component } from 'react';
import './App.css';
import LoadAnimation from './views/LoadAnimation';
import ErrorMessage from './views/ErrorMessage';
import WeatherContainer from './views/WeatherContainer';
import Controller from './Controller';

const STATE_LOADING = 'loading';
const STATE_ERROR = 'error';
const STATE_SHOWING = 'showing';

class App extends Component {
  constructor(props) {
    super(props);
    this.controller = new Controller();
    this.errorMessage = null;
    this.state = {
      appState: STATE_LOADING
    };
  }

  componentDidMount() {
    this.updateWeather();
  }

  updateWeather() {
    this.errorMessage = null;
    this.setState({
      appState: STATE_LOADING
    });
    this.controller.fetchWeather().then(weather => {
      this.setState({
        appState: STATE_SHOWING
      });
    }).catch(error => {
      this.errorMessage = error.message;
      this.setState({
        appState: STATE_ERROR
      });
    });
  }

  render() {
    let currentComponent = null;
    if (this.state.appState === STATE_LOADING) {
      currentComponent = <LoadAnimation />;
    } else if (this.state.appState === STATE_ERROR) {
      currentComponent = <ErrorMessage errorMessage = {this.errorMessage} />;
    } else if (this.state.appState === STATE_SHOWING) {
      currentComponent = <WeatherContainer
        weather = {this.controller.getCurrentWeather()}
        reload = {() => {this.updateWeather();}} />;
    }

    return (
      <div className="App">
        {currentComponent}
      </div>
    );
  }
}

export default App;
