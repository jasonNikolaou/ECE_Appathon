import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = ({handleClickStation, handleClickAccessibleStations}) => {
  return (
    <div className="home mx-auto">
      <p> This is an application developed for the course:</p>
      <p><b>Internet and Applications</b>, NTUA ECE</p>

      <p>Press <b>Not raining</b> to view the stations without rain.</p>
      <p>Press <b>Weather</b> to view the weather conditions in every station.</p>

      <Button className="home-button" variant="outline-primary" onClick={handleClickAccessibleStations}>
        Not raining
      </Button>
      <br/>
      <Button className="home-button" variant="outline-primary" onClick={handleClickStation}>
        Weather
      </Button>
    </div>
  )
}

export default Home
