import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import {
  filterNotRaining,
  sortStations,
  getStationsFromDeviceIds,
  proxy
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
      loading: false,
      filter: ""
    }
    this.handleClickSortStations = this.handleClickSortStations.bind(this);
    this.handleClickViewStations = this.handleClickViewStations.bind(this);
  }

  handleClickSortStations() {
    if (!this.props.location) {
      console.log("error. you must give access to your location.");
    }
    else {
      this.setState({
        filter: (this.state.filter === "") ? "sortedStations" : ""
      });
    }
  }

  async handleClickViewStations(id) {
    this.setState({
      id,
      loading: true
    });
    try {
      const traj_ids_json = await fetch(proxy + `http://147.102.19.45:8080/services/getItravelIdTrajectories/${id}`);
      const traj_ids = await traj_ids_json.json();
      console.log("trajectory ids", traj_ids);
      const onlyTraj_ids = traj_ids.map(traj_id => traj_id["trajectory_id"])

      const itravel_ids_json = await Promise.all(onlyTraj_ids.map(traj_id => (
        //fetch(`http://147.102.19.45:8080/services/getTrajectoryIdTrajectories/${traj_id}`)
        fetch(proxy + `http://147.102.16.156:8080/services/getTrajectoryIdTrajectories/${traj_id}`)
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
        loading: false,
        id
      });
    }
    catch(err) {
      this.setState({
        id: '',
        loading: false
      })
      console.log(err);
    }
  }

  render() {
    const stations = (this.state.filter === "") ? this.state.stations : this.state.sortedStations;
    return (
      <div>
        <p><b>Sort</b> stations <b>by distance from my location</b>:</p>
        <Button variant="outline-primary" onClick={this.handleClickSortStations}>
          Sort
        </Button>
        <Button variant="outline-primary" onClick={this.props.handleClickBack}>
          Back
        </Button>
        <br/>
        <p> Press <b>view stations</b> to view the reachable stations from each station. </p>
        <h3> Accessible Stations: </h3>
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
          else if (this.state.loading === false) {
            return (
              <li key={st['device_id']}>
                <p> Accessible stations from <b>{st['device_Name']}</b>: </p>
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
          else {
            return (
              <li className="station-li" key={st['device_id']}>
                <p className='stationName'> {st['device_Name']} </p>
                <Spinner animation="border" />
              </li>
            );
          }
          })}
          </ul>
      </div>
    )
  }
}

export default AccessibleStations
