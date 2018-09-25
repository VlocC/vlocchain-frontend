import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './header';
import {
  BrowsePage,
  VideoPage
} from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/video' component={VideoPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
