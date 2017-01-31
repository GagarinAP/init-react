import React from 'react';
import axios from 'axios';
import Menu from './Menu.jsx';
import Leaflet from './Leaflet.jsx';
import Charts from './Charts.jsx';

import {CHART_TYPES} from './Constants/Constants.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.changeChartType = this.changeChartType.bind(this);
    this.state = { 
      weatherType: CHART_TYPES.TEMPERATURE,
      weather: []
    };
  }
  changeChartType (type) {
      this.setState({
        weatherType: type
      });
  }
  componentDidMount() {
      axios.get(`http://localhost:3000/weather`)
            .then(res => {
                const weather = res.data;
                //console.log(weather);
                this.setState({ weather });
            })
            .catch(function (error) {
                console.log(error);
            });
  }
  render(){
    //console.log(this.state.weather.map(user=>user.name));
    return(
      <div className="container">
        <Menu changeChartType={this.changeChartType} />
        <Leaflet />
        <Charts weather={this.state.weather} weatherType={this.state.weatherType} />
      </div>
    );
  }
}
