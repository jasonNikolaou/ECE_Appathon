const changeStationName = (stations) => {
  const newStations = stations.map(station => {
    const oldName = station['device_Name'];
    const newName = oldName.replace(/[i,I]Travel-\d*-/, '').replace('iTravel_', '');
    return {
      ...station,
      'device_Name': newName
    }
  })
  return newStations;
}

export default changeStationName;
