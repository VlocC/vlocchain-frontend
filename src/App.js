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
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {window.location.pathname === '/login' ? null : <Header />}
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/video/:videoId' component={VideoPage}/>
          <Route path='/upload' component={UploadPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
