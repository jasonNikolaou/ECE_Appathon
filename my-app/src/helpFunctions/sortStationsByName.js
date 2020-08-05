const sortStationsByName = (stations) => {
  const sortedStations = [...stations].sort((st1, st2) => {
    const name1 = st1['station']['device_Name'];
    const name2 = st2['station']['device_Name'];
    if (name1 < name2) {
      return -1;
    }
    else if (name2 < name1) {
      return 1;
    }
    else {
      return 0;
    }
  })
  return sortedStations;
}

export default sortStationsByName;
