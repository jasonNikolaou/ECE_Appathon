import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = ({handleClickStation, handleClickAccessibleStations, error}) => {
  return (
    <div className="home mx-auto">
      <p> This is an application developed for the course:</p>
      <p><b>Internet and Applications</b>, NTUA ECE</p>

      <p><b>Thessaloniki</b>, Greece </p>
      <p>Data taken from <b>IMET</b> and <b>openweathermap</b></p>
      <p>Press <b>Accesible</b> to view the accessible stations (without rain, snow, etc).</p>
      <p>Press <b>Weather</b> to view the weather conditions in every station.</p>

      <Button className="home-button" variant="outline-primary" onClick={handleClickAccessibleStations}>
        Accessible
      </Button>
      <br/>
      <Button className="home-button" variant="outline-primary" onClick={handleClickStation}>
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
    </div>
  )
}

export default Home
