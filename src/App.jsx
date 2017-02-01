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
      Temp: [],
      Date: [],
      Humidity: [],
      Wind: []
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
        this.setState({ 
          Temp: weather.map(data=>data.temp),
          Date: weather.map(data=>data.date),
          Humidity: weather.map(data=>data.humidity),
          Wind: weather.map(data=>data.wind)
        });
      });
  }

  render(){
    //console.log(this.state.weather.map(user=>user.name));
    return(
      <div className="container">
        <Menu changeChartType={this.changeChartType} />
        <Leaflet />
        <Charts Wind={this.state.Wind} Humidity={this.state.Humidity} Date={this.state.Date} Temp={this.state.Temp} weatherType={this.state.weatherType} />
      </div>
    );
  }
}
