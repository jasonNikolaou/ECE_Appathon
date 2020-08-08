import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Home = ({handleClickStationsWeather, handleClickAccessibleStations, fetchedData, error}) => {
  return (
    <div className="home mx-auto">
      <p> This is an application developed for the course:</p>
      <p><b>Internet and Applications</b>, NTUA ECE</p>

      <p><b>Thessaloniki</b>, Greece </p>
      <p>Data taken from <b>IMET</b> and <b>openweathermap</b>.</p>

      <p><b>Allow access to your location</b> in order to use all features of this application.</p>
      <p>Press <b>Accesible</b> to view the accessible stations (without rain, snow, etc).</p>
      <p>Press <b>Weather</b> to view the weather conditions in every station.</p>

      <Button className="home-button" variant="outline-primary" onClick={handleClickAccessibleStations}>
        Accessible
      </Button>
      <br/>
      <Button className="home-button" variant="outline-primary" onClick={handleClickStationsWeather}>
        Weather
      </Button>
      { error === true
        ?
        <div>
          <p> <b>Error</b>: Cannot fetch data...</p>
          <p> We are sorry. Try again later. </p>
        </div>
        :
        ''
      }
      { fetchedData === false
        ?
        <div>
          <p>Fetching data...</p>
          <Spinner animation="border"/>
        </div>
        :
        ''
      }
    </div>
  )
}

export default Home
