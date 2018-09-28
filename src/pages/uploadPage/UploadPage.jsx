import React, {Component} from 'react';
import {
  Title,
  UploadPageContainer
} from './styledComponents.js';
import FileInput from './FileInput';

class UploadPage extends Component {
  constructor(props) {
    super(props);

    window.WebSocket = window.WebSocket || window.MozWebSocket;
    this.connection = new WebSocket('ws://127.0.0.1:1337');
    this.connection.onopen = this.handleOnOpen;
    this.connection.onerror = this.handleOnError;
    this.connection.onmessage = this.handleOnMessage;
  }

  handleOnOpen = () => {
    console.warn('Connected!');
  }

  handleOnError = (error) => {
    console.error("There was a connection error");
  }

  handleOnMessage = (message) => {
    console.warn('Recieved a message: ', message);
  }

  sendMessage = () => {
    console.log('sent message')
    this.connection.send('Hi there matie');
  }

  render() {
    return (
      <UploadPageContainer>
        <Title>Hey this is the upload page</Title>
        <button onClick={this.sendMessage}>CLICK HERE TO SEND A MESSAGE</button>
        <FileInput />
      </UploadPageContainer>
    );
  }
}

export default UploadPage;
