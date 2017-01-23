import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
var React = require('react');

var Menu = React.createClass({
    
    render: function() {
        return ( 
        	       	
            <Navbar>
            <div className="container-fluid">
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Brand</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Navbar.Text>
			        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
			      </Navbar.Text>
			      
			    </Navbar.Collapse>
			    </div>
			</Navbar>
			
        );
    }

});

module.exports = Menu;