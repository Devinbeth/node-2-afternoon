import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Update from './components/Update.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/update' component={Update} />
        </Switch>
      </div>
    );
  }
}

export default App;
