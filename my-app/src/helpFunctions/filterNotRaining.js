const filterNotRaining = (stations) => {
  const stationsNotRaining = stations.filter(station => {
    const weatherID = station['weather']['weather']['id'];
    if (weatherID < 800) {
      return false;
    }
    return true;
  })
  return stationsNotRaining;
};

export default filterNotRaining;
