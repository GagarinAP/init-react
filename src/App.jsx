import React from 'react';
import Menu from './Menu.jsx';
import Leaflet from './Leaflet.jsx';
import Charts from './Charts.jsx';

class App extends React.Component{
  render(){
    return(
      <div>
        <Menu />
        <Leaflet />
        <Charts />
      </div>
    );
  }
}

export default App;
