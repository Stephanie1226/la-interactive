import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../components/header/Header';
import HomePage from '../containers/homepage/HomePage';

function App() {
  return (
    <div>
    	<Header />
    	<Switch>
      	<Route exact path='/' component={HomePage} />
      	<Route path='/shop' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
