import React from 'react';
import logo from './logo.svg';
import  { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Register from './components/Register'
import Landing from './components/Landing'
import Login from './components/Login'
import Profile from './components/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile} />

            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;