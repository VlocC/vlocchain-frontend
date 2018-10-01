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
import ThumbnailInput from './ThumbnailInput';

const RANDOM_TEXT = "Click and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuffClick and put your description here! Here is some filler text to make it look like stuff";

class UploadPage extends Component {
  constructor(props) {
    super(props);

    this.state ={
      files: []
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;
    this.connection = new WebSocket('ws://127.0.0.1:1337', 'upload');
    this.connection.binaryType = "arraybuffer"
    this.connection.onopen = this.handleOnOpen;
    this.connection.onerror = this.handleOnError;
    this.connection.onmessage = this.handleOnMessage;
    this.connection.onclose = (event) => {
      console.error(event);
    }
  }

  handleConfirmUpload = async () => {
    const videoId = await this.sendInfoToBackend();

    const file    = this.state.files[0];
    const reader  = new FileReader();

    reader.onloadend = this.sendVideoToHolder.bind(this, videoId);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }

  sendInfoToBackend = () => {
    const {title, description} = this.state;
    const requestOptions = {
      body: `title=${title}&creatorId=random&description=${description}&duration= 1:34&thumbnailUrl=https://cdn.gamerant.com/wp-content/uploads/pokemon-go-eevee-evolve-espeon-umbreon-guide.jpg.optimal.jpg&access_token=${localStorage.getItem('VLOCC_TOKEN')}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    };

    return fetch(`http://0.0.0.0:9000/videos`, requestOptions)
    .then(res => res.json())
    .then(response => response.id)
    .catch(error => console.error('Error:', error));
  }

  sendVideoToHolder = (videoId, { target }) => {
    console.log(this.state);
    this.connection.send(`START:${target.result.byteLength}`);
    const arr = new Uint8Array(target.result);

    for(let i = 0; i < arr.length; i += 1024) {
      const sliceEnd = i + 1024 > arr.length ? arr.length : i + 1024
      this.connection.send(arr.slice(i, sliceEnd));
    }
    const fileType = this.state.files[0].type.split('/')[1];
    this.connection.send(`END:${videoId}:${fileType}`);
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
