const getStationsFromDeviceIds = (stations, device_ids) => {
  const reachableStations = [];
  for (const station of stations) {
    const st = station['station'];
    const id = st['device_id'];
    if (device_ids.includes(id)) {
      reachableStations.push({
        'device_id': id,
        'device_Name': st['device_Name']
      });
    }
  }
  return reachableStations;
}

export default getStationsFromDeviceIds;
