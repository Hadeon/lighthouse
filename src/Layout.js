import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './layout.css';
import Navbar from './components/navbar';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function Layout () {
  return(
    <Router>
      <Navbar/>
      <Switch>
        <div className="layout-container">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default Layout;