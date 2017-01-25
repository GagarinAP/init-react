import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';
import Maps from './Maps.jsx';
import Charts from './Charts.jsx';

require('./App.css');

const App = React.createClass({

    render() {
        return (
            <div className="app">
                <Menu />
                <Maps />
                <Charts />
            </div>
        );
    }

})

export default App;
