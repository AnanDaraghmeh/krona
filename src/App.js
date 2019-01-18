import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainComp from './components/MainComp';
import Converter from './components/Converter';
import About from './components/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowCircleDown);

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Route exact path='/' component={MainComp}/>
        <Route path='/converter' component={Converter}/>
        <Route path='/about' component={About}/>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
