import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoPage } from './pages';

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <VideoPage></VideoPage>
      </div>
    );
  }
}

function A(props) {
  // you can use object spread because babel-preset-react-app is set up for you
  const { href, children, ...rest } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
export default App;
