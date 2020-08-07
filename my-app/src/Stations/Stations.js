import React from 'react';
import Button from 'react-bootstrap/Button';
import { getImageName, sortStationsByName } from '../helpFunctions';

const Stations = ({stations, handleClickBack}) => {
  const sortedStations = sortStationsByName(stations);
  const viewStations = sortedStations.map(station => {
    const name = station['station']['device_Name'];
    const id = station['station']['device_id'];
    const weather = station['weather'];
    const weatherID = weather['weather'][0]['id'];
    const weatherDescription = weather['weather'][0]['description'];
    const temperature = weather['main']['temp'];
    const img = 'weather-icons/'+ getImageName(weatherID) + '.png';
    return (
    <li key={id}>
      <div className="station">
        <h3> {name} </h3>
        <p> <b>Description</b>: {weatherDescription} </p>
        <img alt='' src={img} width="100" height="100"/>
        <p> <b>Temperature</b>: {temperature} </p>
      </div>
    </li>
  )})
  
  return (
    <div>
      <h2> Stations weather conditions </h2>
      <Button variant='outline-primary' onClick={handleClickBack}>
        Back
      </Button>
      <ul>{viewStations}</ul>
    </div>
  )
}

export default Stations;
