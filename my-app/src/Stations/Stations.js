import React from 'react';
import Button from 'react-bootstrap/Button';
import { sortStationsByName } from '../helpFunctions';

const Stations = ({stations, handleClickBack}) => {
  const sortedStations = sortStationsByName(stations);
  const viewStations = sortedStations.map(station => {
    const name = station['station']['device_Name'];
    const id = station['station']['device_id'];
    const weather = station['weather'];
    const weatherDescription = weather['weather'][0]['description']
    const temperature = weather['main']['temp']
    const img = weatherDescription.replace(' ', '-') + '.png';
    return (
    <li key={id}>
      <div className="station">
        <h2> {name} </h2>
        <p> {weatherDescription} </p>
        <img alt='' src={img} width="100" height="100"/>
        <p> Temperature: {temperature} </p>
      </div>
    </li>
  )})
  return (
    <div>
      <h2> Stations </h2>
      <Button variant='outline-primary' onClick={handleClickBack}>
        Back
      </Button>
      <ul>{viewStations}</ul>
    </div>
  )
}

export default Stations;
