import React from 'react';
import { Line } from 'react-chartjs-2';

require('./Charts.css');

export default class Charts extends React.Component{
  constructor() {
    super();
  }
  render(){
    console.log(this.props.weather);
    const data = {
        labels: this.props.weather.map(weathers=>weathers.date),
        datasets: [
            {
                label: 'Dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.weather.map(weathers=>weathers.temp)
            }
        ]
    };
    const option = {
        responsive: true
    }
    return(
      <div className="container">
        <div className="charts">
          <Line data={data} options={option}/>
        </div>
      </div>
    );
  }
}
