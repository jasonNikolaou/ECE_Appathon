import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = ({handleClickStation, handleClickAccessibleStations}) => {
  return (
    <div className="home mx-auto">
      <p> this is a text </p>
      <p> this is again a text</p>

      <Button className="home-button" variant="outline-primary" onClick={handleClickAccessibleStations}>
        Accessible Stations
      </Button>
      <br/>
      <Button className="home-button" variant="outline-primary" onClick={handleClickStation}>
        Stations
      </Button>
    </div>
  )
}

export default Home
