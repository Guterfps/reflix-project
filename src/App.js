
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './components/landing'


class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <Router>
      <div>
      <div id="home-background"></div>
        <div id="main-links">
        <Link to="/">Home</Link>
        <Link to="/Catalog">Catalog</Link>
        
        </div>
        <Route exact path="/" component={Landing}/>
      </div>
      </Router>
    )
  }
}

export default App;
