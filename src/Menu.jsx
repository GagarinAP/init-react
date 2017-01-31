import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import {CHART_TYPES} from './Constants/Constants.jsx';

export default class Menu extends React.Component{
  constructor(){
    super();
    this.showChart = this.showChart.bind(this);
    this.setChartType = this.setChartType.bind(this);

    this.state = {
      weatherType: CHART_TYPES.TEMPERATURE
    }
  }

  showChart () {
    if (this.props.changeChartType) {
      this.props.changeChartType(this.state.weatherType);
    }
  }

  setChartType (type) {
    this.setState({
      weatherType: type
    });
  }
  render(){
    console.log();
    return(
      <Navbar>
      <div className="container">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Harley</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem  
            eventKey={1} 
            onClick={()=>this.setChartType(CHART_TYPES.TEMPERATURE)}     
            onChange={this.showChart}
          >
            TEMPERATURE
          </NavItem>
          <NavItem  
            eventKey={2} 
            onClick={()=>this.setChartType(CHART_TYPES.PREASURE)} 
            onChange={this.showChart}         
          >
            PREASURE
          </NavItem>
          <NavItem 
            eventKey={3} 
            onClick={this.showChart}           
            onChange={() => this.setChartType(CHART_TYPES.WIND_SPEED)}
          >
            WIND_SPEED
          </NavItem>
        </Nav>
        </div>
      </Navbar>
    );
  }
}
