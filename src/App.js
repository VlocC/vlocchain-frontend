import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './header';
import {
  BrowsePage,
  UploadPage,
  VideoPage
} from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/video' component={VideoPage}/>
          <Route path='/upload' component={UploadPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
