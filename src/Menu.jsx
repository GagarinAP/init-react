import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import {CHART_TYPES} from './Constants/Constants.jsx';

export default class Menu extends React.Component{
  constructor(){
    super();
    this.setChartType = this.setChartType.bind(this);

    this.state = {
      weatherType: CHART_TYPES.TEMPERATURE
    }
  }

  setChartType (type) {
    this.setState({
      weatherType: type
    }, () => {
      if (this.props.changeChartType) {
        this.props.changeChartType(this.state.weatherType);
      }   
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
            onChange={() => {}}
          >
            TEMPERATURE
          </NavItem>
          <NavItem  
            eventKey={2} 
            onClick={()=>this.setChartType(CHART_TYPES.PREASURE)} 
            onChange={() => {}}
          >
            PREASURE
          </NavItem>
          <NavItem 
            eventKey={3}                       
            onClick={() => this.setChartType(CHART_TYPES.WIND_SPEED)}
            onChange={() => {}}
          >
            WIND_SPEED
          </NavItem>
        </Nav>
        </div>
      </Navbar>
    );
  }
}