import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      chartData: { 
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Total Devices',
            data: [450, 520, 557, 660, 661, 701, 750, 810, 805, 870, 901, 1124],
            borderColor: [
              'dodgerblue'
            ],
            borderWidth: 4,
            fill: false,
          },

          {
            label: 'Recalled Devices',
            data: [101, 70, 56, 42, 92, 77, 66, 59, 71, 81, 68, 72],
            borderColor: [
              'rgba(255, 193, 6, 1)'
            ],
            borderWidth: 4,
            fill: false,
          },

          {
            label: 'Vulnerable Devices',
            data: [1, 3, 20, 16, 25, 5, 6, 4, 7, 10, 17, 14],
            borderColor: [
              'rgba(220, 53, 69, 1)'
            ],
            borderWidth: 4,
            fill: false,
          },

        ],
      }
    }
  }

  render() { 
    return (
      <div id="line-chart-container">
        <div className="line-chart">
          <Line
            data={this.state.chartData}
            options={{
              responsive: true,
              animation: {
                duration: 3000
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}
 
export default LineChart;