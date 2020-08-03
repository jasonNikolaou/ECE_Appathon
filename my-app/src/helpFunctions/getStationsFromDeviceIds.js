const getStationsFromDeviceIds = (stations, device_ids) => {
  const AccessibleStations = [];
  for (const station of stations) {
    const st = station['station'];
    const id = st['device_id'];
    if (device_ids.includes(id)) {
      AccessibleStations.push({
        'device_id': id,
        'device_Name': st['device_Name']
      });
    }
  }
  return AccessibleStations;
}

export default getStationsFromDeviceIds;
