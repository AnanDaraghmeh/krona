import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/Header';
import MainComp from './homepage/MainComp';
import Converter from './converter/Converter';
import About from './about/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import ErrorBoundary from './common/ErrorBoundary';

library.add(faArrowCircleDown);

const App = () => {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <ErrorBoundary>
          <Route exact path='/' component={MainComp}/>
          <Route path='/converter' component={Converter}/>
          <Route path='/about' component={About}/>
          </ErrorBoundary>
        </React.Fragment>
      </Router>
    )
}

export default App;
