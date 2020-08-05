import React from 'react';
import Button from 'react-bootstrap/Button';

import {
  filterNotRaining,
  sortStations,
  getStationsFromDeviceIds
 } from '../helpFunctions';

class AccessibleStations extends React.Component {
  constructor(props) {
    super(props);
    const stations = filterNotRaining(this.props.stations);
    const location = this.props.location;
    this.state = {
      stations: stations,
      sortedStations: sortStations(stations, location),
      accessibleStations: [],
      id: '',
      location: location,
      filter: ""
    }
    this.handleClickFilterStations = this.handleClickFilterStations.bind(this);
    this.handleClickViewStations = this.handleClickViewStations.bind(this);
  }

  handleClickFilterStations() {
    if (this.state.location === {}) {
      alert("You should allow access to location");
    }
    this.setState({
      filter: (this.state.filter === "") ? "sortedStations" : ""
    })
  }

  async handleClickViewStations(id) {
    try {
      const traj_ids_json = await fetch(`http://147.102.19.45:8080/services/getItravelIdTrajectories/${id}`);
      const traj_ids = await traj_ids_json.json();
      console.log("trajectory ids", traj_ids);
      const onlyTraj_ids = traj_ids.map(traj_id => traj_id["trajectory_id"])

      const itravel_ids_json = await Promise.all(onlyTraj_ids.map(traj_id => (
        //fetch(`http://147.102.19.45:8080/services/getTrajectoryIdTrajectories/${traj_id}`)
        fetch(`http://147.102.16.156:8080/services/getTrajectoryIdTrajectories/${traj_id}`)
      )))

      const itravel_ids = await Promise.all(itravel_ids_json.map(id => id.json()));
      const device_ids = itravel_ids.flatMap(itravel_ids_arr => (
        itravel_ids_arr.map(id => id['itravel_id'])
      ))
      console.log('device_ids', device_ids);
      const accessibleStations = getStationsFromDeviceIds(this.state.stations, device_ids);
      console.log('accessibleStations', accessibleStations);
      this.setState({
        accessibleStations,
        id
      });
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    const stations = (this.state.filter === "") ? this.state.stations : this.state.sortedStations;
    return (
      <div>
        <p> Sort stations by distance from my location: </p>
        <Button variant="outline-primary" onClick={this.handleClickFilterStations}>
          Sort
        </Button>
        <Button variant="outline-primary" onClick={this.props.handleClickBack}>
          Back
        </Button>
        <br/>
        <h3> Stations without rain: </h3>
        <ul className='stationList'>
        {stations.map(station => {
          const st = station['station'];
          const id = st['device_id'];
          if (id !== this.state.id) {
            return (
              <li className="station-li" key={st['device_id']}>
                <p className='stationName'> {st['device_Name']} </p>
                <Button variant="outline-primary" onClick={() => this.handleClickViewStations(id)}>
                  View stations
                </Button>
              </li>
            );
          }
          else {
            return (
              <li key={st['device_id']}>
                <p> Accessible stations from {st['device_Name']}: </p>
                <ul>
                  {this.state.accessibleStations.map(st => (
                    <li key={st['device_id']}>
                      <p className='stationName2'> {st['device_Name']} </p>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          })}
          </ul>
      </div>
    )
  }
}

export default AccessibleStations
