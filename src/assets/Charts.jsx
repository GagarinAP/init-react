import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import {Bar} from 'react-chartjs';
require('./Charts.css');
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const options = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each bar to be 2px wide and green
  elements: {
    rectangle: {
      borderWidth: 2,
      borderColor: 'rgb(0, 255, 0)',
      borderSkipped: 'bottom'
    }
  },
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Bar Chart'
  }
}
class Charts extends React.Component{
  getInitialState() {
  return {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: "rgba(220,220,220,0.5)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        hidden: true,
        label: 'Dataset 2',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }, {
        label: 'Dataset 3',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }
    ]
  }
},
randmizeData() {
  const zero = Math.random() < 0.2
    ? true
    : false

  this.state.datasets.forEach((dataset) => {
    Object.assign(dataset, {
      backgroundColor: randomColor(),
      data: dataset.data.map(function() {
        return zero
          ? 0.0
          : randomScalingFactor()
      })
    })
  })

  this.forceUpdate()
},
addDataset() {
  const newDataset = {
    label: 'Dataset ' + this.state.datasets.length,
    backgroundColor: randomColor(),
    data: []
  }

  for (label of this.state.labels) {
    newDataset.data.push(randomScalingFactor())
  }

  this.state.datasets.push(newDataset)
  this.forceUpdate()
},
removeDataset() {
  this.state.datasets.splice(0, 1)
  this.forceUpdate()
},
addData() {
  if (this.state.datasets.length > 0) {
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    const month = MONTHS[this.state.labels.length % MONTHS.length]
    this.state.labels.push(month)

    for (dataset of this.state.datasets) {
      dataset.data.push(randomScalingFactor())
    }
    this.forceUpdate()
  }
},
removeData() {
  this.state.labels.splice(-1, 1) // remove the label first
  this.state.datasets.forEach((dataset) => dataset.data.pop())
  this.forceUpdate()
},
    render() {
        return (
            <div className="container">
              <div className="charts">
              <Bar data={this.state} options={options} ref={(ref) => this.Bar = ref}/>
                <button onClick={this.randmizeData}>Randomize Data</button>
                <button onClick={this.addDataset}>Add Dataset</button>
                <button onClick={this.removeDataset}>Remove Dataset</button>
                <button onClick={this.addData}>Add Data</button>
                <button onClick={this.removeData}>Remove Data</button>
              </div>
            </div>
        );
    }

}

export default Charts;
