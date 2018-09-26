import React, {Component} from 'react';
import { Title } from './styledComponents.js';

class UploadPage extends Component {
  constructor(props) {
    super(props);

    window.WebSocket = window.WebSocket || window.MozWebSocket;
    this.connection = new WebSocket('ws://127.0.0.1:1337');
    this.connection.onopen = function () {
      // first we want users to enter their names
      console.warn('connected')
    };
  }

  render() {
    return <Title>Hey this is the upload page</Title>
  }
}

export default UploadPage;
