import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainComp from './homepage/MainComp';
import Converter from './converter/Converter';
import About from './about/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowCircleDown);

const App = () => {
    return (
      <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={MainComp}/>
            <Route path='/converter' component={Converter}/>
            <Route path='/about' component={About}/>
        </React.Fragment>
      </BrowserRouter>
    )
}

export default App;
