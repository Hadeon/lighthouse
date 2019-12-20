import React from 'react';
import './layout.css';
import Navbar from './components/navbar';
import Dashboard from './pages/Dashboard';

function Layout () {
  return(
    <React.Fragment>
      <Navbar/>
      <div className="layout-container">
        <Dashboard/>
      </div>
    </React.Fragment>
  )
}

export default Layout;