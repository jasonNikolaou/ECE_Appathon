import React from 'react';

const Home = ({handleClickStation, handleClickAccessibleStations}) => {
  return (
    <div>
      <button onClick={handleClickAccessibleStations}>
        Accessible Stations
      </button>
      <button onClick={handleClickStation}>
        Stations
      </button>
    </div>
  )
}

export default Home
