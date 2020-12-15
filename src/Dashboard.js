import React from "react";
import Table from "react-bootstrap/Table";
import { ChartProvider, LineSeries, XAxis, YAxis } from 'rough-charts';

import "./App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUSValues: "loading",
      stateUS: "Wisconsin",
      stateCode: "wi",
      dailyStateValues: [],
      ready: false,
    };
  }

  getLatLon() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve([lat, lon]);
        },
        () => reject("cannot get lat and lon")
      );
    });
  }

  getStateData(stateCode) {
    fetch(
      "https://api.covidtracking.com/v1/states/" + stateCode + "/daily.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ dailyStateValues: json, ready: true });
        //console.log(json[0]);
      });
  }

  componentDidMount() {
    // get current US data
    fetch("https://api.covidtracking.com/v1/us/current.json")
      .then((res) => res.json())
      .then((json) => json[0])
      .then((json) => {
        this.setState({ currentUSValues: json });
      });
    
    // get user's location
    this.getLatLon()
      .then(([lat, lon]) => {
        fetch(
          "https://us1.locationiq.com/v1/reverse.php?key=pk.65d6acbb182add541f5e458dbaf9bbd6&lat=" +
            lat +
            "&lon=" +
            lon +
            "&zoom=5&statecode=1&format=json"
        )
          .then((res) => res.json())
      // get state data
          .then((json) => {
            //console.log(json);
            this.setState({ stateUS: json.address.state });
            const stateCode = json.address.state_code;
            this.setState({ stateCode: stateCode });
            this.getStateData(stateCode);
          });
      })
      .catch((err) => {
        this.getStateData(this.state.stateCode);
      });
  }

  renderStateData() {
    return (
      <div>
        <h4 className='text-center'>Covid Cases Graph For Past Week</h4>
        <ChartProvider data={this.state.dailyStateValues.slice(0,7).reverse()} height={300} id="state" kind="ChartProvider" margin={{right:100}} name="State Cases">
          <YAxis dataKey="positiveIncrease"/>
          <XAxis dataKey="date"/>
          <LineSeries dataKey="positiveIncrease"/>
        </ChartProvider>
        <Table responsive bordered hover>
          <thead>
            <th>Date</th>
            <th>Positive Cases</th>
            <th>Deaths</th>
            <th>Recovered Total</th>
          </thead>
          <tbody>
            {this.state.dailyStateValues.map((day, idx) => {
              if (idx > 7) return;
              return (
                <tr key={day.date}>
                  <td>{day.date}</td>
                  <td>{day.positiveIncrease}</td>
                  <td>{day.deathIncrease}</td>
                  <td>{day.recovered}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return (
      <>
        <h2 className='text-center'>Current U.S. values</h2>
        <Table responsive bordered hover>
          <tbody>
            <tr>
              <th>Positive Cases:</th>
              <td>Total - {this.state.currentUSValues.positive}</td>
              <td>Increase - {this.state.currentUSValues.positiveIncrease}</td>
            </tr>
            <tr>
              <th>Deaths:</th>
              <td>Total - {this.state.currentUSValues.death}</td>
              <td>Increase - {this.state.currentUSValues.deathIncrease}</td>
            </tr>
            <tr>
              <th>Recovered:</th>
              <td>Total - {this.state.currentUSValues.recovered}</td>
            </tr>
          </tbody>
        </Table>
        <h2 className='text-center'>{this.state.stateUS} values in the past week</h2>
        <p>{this.state.ready ? "" : "loading"}</p>
        {this.state.ready ? this.renderStateData() : ""}
      </>
    );
  }
}

export default Dashboard;
