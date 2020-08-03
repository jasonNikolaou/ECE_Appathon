import React from 'react';
import { Home } from './Home';
import { AccessibleStations } from './AccessibleStations';
import { Stations } from './Stations';

import { stations, changeStationName } from './helpFunctions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: stations,
      location: {
        lat: "40.6150064974067820",
        lon: "22.9541949287744270"
      },
      mode: 'Home'
    }
    this.handleClickAccessibleStations = this.handleClickAccessibleStations.bind(this);
    this.handleClickStation = this.handleClickStation.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  async componentDidMount() {

    //const stationsJSON = await fetch('http://feed.opendata.imet.gr:23577/itravel/devices.json');
    //const stations = await stationsJSON.json();
    // navigator.geolocation.getCurrentPosition(res =>
    //   this.setState({
    //     location: {
    //       lat: res.coords.latitude,
    //       lon: res.coords.longitude
    //     }
    //   })
    // )
    const stations = changeStationName(this.state.stations);
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

  handleClickAccessibleStations() {
    this.setState({
      mode:'AccessibleStations'
    })
  }

  handleClickStation() {
    this.setState({
      mode: 'Station'
    })
  }

  handleClickBack() {
    this.setState({
      mode: 'Home'
    })
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
          />
        }
      </div>
    );
  }
}

export default App;
