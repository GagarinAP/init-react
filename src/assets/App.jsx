var React = require('react');
var Menu = require('./Menu.jsx');
var Maps = require('./Maps.jsx');
var Charts = require('./Charts.jsx');

require('./App.css');

var App = React.createClass({
    
    render: function() {
        return (
            <div className="app">                
                <Menu />
                <h2 className="app-header">App</h2>
                <Maps />
                <Charts />
            </div>
        );
    }
    
});

module.exports = App;