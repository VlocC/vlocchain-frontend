import React, {Component} from 'react';
import {
  Title,
  UploadPageContainer,
  ThumbnailImg,
  ThumbnailDiv,
  DescriptionDiv,
  ConfirmButton
} from './styledComponents.js';

import {
  SubContainer,
  CreatorDiv,
  CreatorImg
} from '../videoPage/styledComponents';

const RANDOM_TEXT = "Click and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuff";

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

  handleConfirmUpload = () => {
    console.warn('confirmed')
  }

  handleOnInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
    const timeCreated = new Date();
    return (
      <UploadPageContainer>
        <Title name="title" onChange={this.handleOnInputChange} placeholder="Put your title here"/>
        <ThumbnailInput callBackSetState={this.setState.bind(this)}/>
        <SubContainer>
          <CreatorDiv style={{width: '100%'}}>
            <CreatorDiv>
              <CreatorImg />
              <h2>Owen Sullivan</h2>
            </CreatorDiv>
            <h3>{`${timeCreated.getMonth()} ${timeCreated.getDate()}, ${timeCreated.getFullYear()}`}</h3>
          </CreatorDiv>
          <DescriptionDiv
            name="description"
            onChange={this.handleOnInputChange}
            placeholder={`Click and put your description here! Here is some filler text to make it look like stuff ${RANDOM_TEXT}`}
          />
        </SubContainer>
        <ConfirmButton onClick={this.handleConfirmUpload} >Confirm Upload</ConfirmButton>
      </UploadPageContainer>
    );
  }
}

export default UploadPage;
