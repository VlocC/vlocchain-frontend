import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './header';
import {
  BrowsePage,
  UploadPage,
  VideoPage,
  LoginPage
} from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/login' component={LoginPage}/>
        <Switch>
          <Route path='/video/:videoId' component={VideoPage}/>
          <Route path='/upload' component={UploadPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
