import React, { Component } from 'react';
import '../index.css';
import './dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="test">
        <div className="dashboard-flex-container">
          <div className="dashboard-item dashboard-balance">
            <div className="icon-test"/>
            <h2>78% W/L</h2>
          </div>
          <div className="dashboard-item dashboard-progress"></div>
          <div className="dashboard-item dashboard-forecast"></div>
        </div>
      </div>
    )
  }
}

export default Dashboard;