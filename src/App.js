import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import {
  BrowsePage,
  VideoPage
} from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/video' component={VideoPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
