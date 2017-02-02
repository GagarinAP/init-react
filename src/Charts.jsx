import React from 'react';
import { Line } from 'react-chartjs-2';
import {CHART_TYPES} from './Constants/Constants.jsx';
require('./Charts.css');

export default class Charts extends React.Component{
  constructor() {
    super();
    this._getChartValue = this._getChartValue.bind(this);
  }
  _getChartValue() {
      switch(this.props.weatherType) {
          case CHART_TYPES.TEMPERATURE: return this.props.weather.map(weathers=>weathers.temp);
          case CHART_TYPES.PREASURE: return this.props.weather.map(weathers=>weathers.wind);
          case CHART_TYPES.WIND_SPEED: return this.props.weather.map(weathers=>weathers.humidity);
      }
  }
  render(){
    const data = {
        labels: this.props.weather.map(weathers=>weathers.date),
        datasets: [
            {
                label: this.props.weatherType,
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
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: this._getChartValue()
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
