import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Safe', 'Vulnerable', 'Recalled',
  ],
  datasets: [
    {
      label: 'Devices',
      backgroundColor: [
        'dodgerblue',
        'rgba(220, 53, 69, 1)',
        'rgba(255, 193, 6, 1)'
      ],
      hoverBackgroundColor: [
      'dodgerblue',
      'rgba(220, 53, 69, 1)',
      'rgba(255, 193, 6, 1)'
      ],
      data: [1038, 14, 72]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
      

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Devices',
              fontSize:20
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>
    );
  }
}