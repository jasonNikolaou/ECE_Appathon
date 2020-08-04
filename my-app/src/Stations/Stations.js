import React from 'react';

const Stations = ({stations, handleClickBack}) => {
  const viewStations = stations.map(station => {
    const name = station['station']['device_Name'];
    const id = station['station']['device_id'];
    const weather = station['weather'];
    const weatherDescription = weather['weather'][0]['description']
    const temperature = weather['main']['temp']
    return (
    <li key={id}>
      <div className="station">
        <h2> {name} </h2>
        <p> {weatherDescription} </p>
        <p> Temperature: {temperature} </p>
      </div>
    </li>
  )})
  return (
    <div>
      <h2> Stations </h2>
      <ul>{viewStations}</ul>
      <button onClick={handleClickBack}>
        Back
      </button>
    </div>
  )
}

export default Stations;
