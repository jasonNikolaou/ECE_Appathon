import React from 'react';
import { Home } from './Home';
import { AccessibleStations } from './AccessibleStations';
import { StationsWeather } from './StationsWeather';
import { savedStations, changeStationName } from './helpFunctions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: changeStationName(savedStations),
      location: {},
      mode: 'Home',
      error: false,
      fetchedData: false
    }
    this.handleClickAccessibleStations = this.handleClickAccessibleStations.bind(this);
    this.handleClickStationsWeather = this.handleClickStationsWeather.bind(this);
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
    const stations = this.state.stations;
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
        fetchedData: true,
        stations: stationsWithWeather
      })
    }
    catch(err) {
      console.log('Fetching weather data failed...')
      this.setState({ error: true })
    }
  }

  handleClickAccessibleStations() {
    if (this.state.fetchedData === true) {
      this.setState({ mode:'AccessibleStations' })
    }
  }

  handleClickStationsWeather() {
    if (this.state.fetchedData === true) {
      this.setState({ mode: 'StationWeather' })
    }
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
            stations={this.state.stations}
            location={this.state.location}
            handleClickBack={this.handleClickBack}
          />
          :
          this.state.mode === 'StationWeather'
          ?
          <StationsWeather
            stations={this.state.stations}
            handleClickBack={this.handleClickBack}
          />
          :
          <Home
            handleClickStationsWeather={this.handleClickStationsWeather}
            handleClickAccessibleStations={this.handleClickAccessibleStations}
            error={this.state.error}
            fetchedData={this.state.fetchedData}
          />
        }
      </div>
    );
  }
}

export default App;
