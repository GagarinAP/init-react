import React from 'react';
import LineChart from 'react-chartjs';

class Charts extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="charts">
          <LineChart data={chartData} options={chartOptions}/>
        </div>
      </div>
    );
  }
}

export default Charts;
