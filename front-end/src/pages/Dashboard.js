import React, { Component } from 'react';
import CountUp from 'react-countup';
import LineChart from '../components/LineChart'

class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  renderNumbers = () => {
    let numbers = [
      {title: "TOTAL DEVICES", end: 1124},
      {title: "RECALLED DEVICES", end: 72},
      {title: "VULNERABLE DEVICES", end: 14},
    ]

    numbers = numbers.map(item =>
      <div className="device-number">
        <h1>
          <CountUp
            start={0}
            end={item.end}
            duration={1.5}
            delay={1}
          />
        </h1>
        <h2>{item.title}</h2>
      </div>
    )

    return (
      <div className="device-number-container">
        {numbers}
      </div>
    )
  }

  render() { 
    return (
      <div id="dashboard">
        <h1 className="title">MEDICAL DEVICE THREAT INTELLIGENCE</h1>
        {this.renderNumbers()}
        <LineChart/>
      </div>
    );
  }
}
 
export default Dashboard;