import haversine_distance from './haversine_distance';

const sortStations = (stations, location) => {
  const sortedStations = [...stations].sort((st1, st2) => {
    const pos1 = {
      lat: st1['station']['lat'],
      lon: st1['station']['lon']
    }
    const pos2 = {
      lat: st2['station']['lat'],
      lon: st2['station']['lon']
    }
    const dist1 = haversine_distance(location, pos1);
    const dist2 = haversine_distance(location, pos2);
    if (dist1 < dist2) {
      return -1;
    }
    else if (dist1 > dist2) {
      return 1;
    }
    return 0;
  })
  return sortedStations;
}

export default sortStations;
