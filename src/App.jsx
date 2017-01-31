import React from 'react';
import axios from 'axios';
import Menu from './Menu.jsx';
import Leaflet from './Leaflet.jsx';
import Charts from './Charts.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather: []
    };
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
        <Menu />
        <Leaflet />
        <Charts weather={this.state.weather}/>
      </div>
    );
  }
}
