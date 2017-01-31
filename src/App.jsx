import React from 'react';
import axios from 'axios';
import Menu from './Menu.jsx';
import Leaflet from './Leaflet.jsx';
import Charts from './Charts.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
      axios.get(`http://localhost:3000/users`)
            .then(res => {
                const users = res.data;
                //console.log(users);
                this.setState({ users });
            })
            .catch(function (error) {
                console.log(error);
            });
  }
  render(){
    //console.log(this.state.users.map(user=>user.name));
    return(
      <div className="container">
        <Menu />
        <Leaflet />
        <Charts users={this.state.users}/>
      </div>
    );
  }
}
