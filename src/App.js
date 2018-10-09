import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './header';
import {
  BrowsePage,
  UploadPage,
  VideoPage,
  LoginPage,
  CreatorPage
} from './pages';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        { window.location.pathname === '/login' ? null : <Header /> }
        <Route path='/login' component={LoginPage}/>
        <Switch>
          <Route path='/video/:videoId' component={VideoPage}/>
          <Route path='/creator/:creatorId' component={CreatorPage} />
          <Route path='/upload' component={UploadPage}/>
          <Route exact path='/' component={BrowsePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
