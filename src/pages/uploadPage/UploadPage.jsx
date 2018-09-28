import React, {Component} from 'react';
import {
  Title,
  UploadPageContainer,
  ThumbnailImg,
  ThumbnailDiv
} from './styledComponents.js';
import ThumbnailInput from './ThumbnailInput';

class UploadPage extends Component {
  constructor(props) {
    super(props);

    this.state ={
      files: []
    }

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
    console.warn(this.state)
    return (
      <UploadPageContainer>
        <Title placeholder="Put your title here"/>
        <ThumbnailInput callBackSetState={this.setState.bind(this)}/>

      </UploadPageContainer>
    );
  }
}

export default UploadPage;
