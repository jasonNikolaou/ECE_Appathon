import React from 'react';
import { Home } from './Home';
import { AccessibleStations } from './AccessibleStations';
import { Stations } from './Stations';

import { proxy, savedStations, changeStationName } from './helpFunctions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      location: {},
      mode: 'Home',
      error: false
    }
    this.handleClickAccessibleStations = this.handleClickAccessibleStations.bind(this);
    this.handleClickStation = this.handleClickStation.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(res =>
      this.setState({
        location: {
          lat: res.coords.latitude,
          lon: res.coords.longitude
        }
      })
    )
    let stations = [];
    try {
      const stationsJSON = await fetch(proxy + 'http://feed.opendata.imet.gr:23577/itravel/devices.json');
      const stations_ = await stationsJSON.json();
      stations = changeStationName(stations_);
    }
    catch(err) {
      console.log('Fetching stations failed. Use saved stations.')
      stations = changeStationName(savedStations);
    }

    try {
      const weatherJSON = await Promise.all(stations.map(station => {
        const lat = station['lat'];
        const lon = station['lon'];
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=94f3c8e684ecb557e3091f514c7fe252`)}
      ));

      const weather = await Promise.all(weatherJSON.map(res => res.json()))
      const stationsWithWeather = weather.map((w, i) => ({
        station: stations[i],
        weather: w
      }))
      this.setState({
        stations: stationsWithWeather
      })
    }
    catch(err) {
      console.log('Fetching weather data failed...')
      this.setState({ error: true })
    }
  }

  handleClickAccessibleStations() {
    this.setState({ mode:'AccessibleStations' })
  }

  handleClickStation() {
    this.setState({ mode: 'Station' })
  }

  handleClickBack() {
    this.setState({ mode: 'Home' })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> Appathon </h1>
          <p> NTUA ECE </p>
        </div>
        { this.state.mode === 'AccessibleStations'
          ?
          <AccessibleStations
            location={this.state.location}
            stations={this.state.stations}
            handleClickBack={this.handleClickBack}
          />
          :
          this.state.mode === 'Station'
          ?
          <Stations
            stations={this.state.stations}
            handleClickBack={this.handleClickBack}
          />
          :
          <Home
            handleClickStation={this.handleClickStation}
            handleClickAccessibleStations={this.handleClickAccessibleStations}
            error={this.state.error}
          />
        }
      </div>
    );
  }
}

export default App;
