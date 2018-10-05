import React, {Component} from 'react';
import Dropzone from 'react-dropzone'
import {
  Title,
  PageContainer,
  ThumbnailImg,
  ThumbnailDiv,
  CreatorDiv,
  CreatorImg,
  SubContainer,
  DescriptionDiv
} from './styledComponents.js';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {infoLoading: true};

    window.WebSocket = window.WebSocket || window.MozWebSocket;
    this.connection = null;
    this.myMediaSource = new MediaSource();
    this.streamUrl = URL.createObjectURL(this.myMediaSource);
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET"
    }
    const id = this.props.match.params.videoId
    console.warn("here");
    fetch(`http://0.0.0.0:9000/videos/${id}`, requestOptions)
    .then(res => res.json())
    .then(response => {
      this.setupWebSocket('ws://127.0.0.1:1337');
      //this.getVideoSource(id);

      this.setState({...response, infoLoading : false})
    })
    .catch(error => console.error('Error:', error));
  }

  getVideoSource = (id) => {
    this.connection.send(`START:${id}`);
  }

  setupWebSocket = (url) => {
    this.connection = new WebSocket(url, 'stream');
    this.connection.binaryType = "arraybuffer";
    this.connection.onopen = this.handleOnOpen;
    this.connection.onerror = this.handleOnError;
    this.connection.onmessage = this.handleOnMessage;
    this.connection.onclose = (event) => {
      console.error(event);
    }
  }

  handleOnOpen = () => {
    console.warn('Connected!');
    this.connection.send(`START:${this.props.match.params.videoId}`);
  }

  handleOnError = (error) => {
    console.error("There was a connection error");
  }

  handleOnMessage = (message) => {
    console.log(this.streamUrl)
    console.log(message.data)
    const videoSourceBuffer = this.myMediaSource
    .addSourceBuffer('video/webm; codecs="vorbis,vp8"');

    videoSourceBuffer.addEventListener('updateend', () => {
      this.myMediaSource.endOfStream();
      console.log(this.myMediaSource.readyState); // ended
    });

    console.log(videoSourceBuffer)

    videoSourceBuffer.appendBuffer(new Uint8Array(message.data));
    console.log(this.myMediaSource)
  }

  render() {
    const timeCreated = new Date(this.state.createdAt)
    console.warn(this.state);
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        <Title>{this.state.title}</Title>
        <ThumbnailDiv>
          <ThumbnailImg src={`https://s3.csh.rit.edu/vlocchain/${this.props.match.params.videoId}.jpg`} />
        </ThumbnailDiv>
        <video controls src={this.streamUrl}></video>
        <SubContainer>
          <CreatorDiv style={{width: '100%'}}>
            <CreatorDiv>
              <CreatorImg src={this.state.creator.picture} />
              <h2>{this.state.creator.name}</h2>
            </CreatorDiv>
            <h3>{`${timeCreated.getMonth()} ${timeCreated.getDate()}, ${timeCreated.getFullYear()}`}</h3>
          </CreatorDiv>
          <DescriptionDiv>
            {`${this.state.description}`}
          </DescriptionDiv>
        </SubContainer>
      </PageContainer>
    )
  }
}

export default VideoPage;


// var FILE = 'test.webm';
// var NUM_CHUNKS = 5;
// var video = document.querySelector('video');
//
// window.MediaSource = window.MediaSource || window.WebKitMediaSource;
// if (!!!window.MediaSource) {
//   alert('MediaSource API is not available');
// }
//
// var mediaSource = new MediaSource();
//
// document.querySelector('[data-num-chunks]').textContent = NUM_CHUNKS;
//
// video.src = window.URL.createObjectURL(mediaSource);
//
// function callback(e) {
//   var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');
//
//   logger.log('mediaSource readyState: ' + this.readyState);
//
//   GET(FILE, function(uInt8Array) {
//     var file = new Blob([uInt8Array], {type: 'video/webm'});
//     var chunkSize = Math.ceil(file.size / NUM_CHUNKS);
//
//     logger.log('num chunks:' + NUM_CHUNKS);
//     logger.log('chunkSize:' + chunkSize + ', totalSize:' + file.size);
//
//     // Slice the video into NUM_CHUNKS and append each to the media element.
//     var i = 0;
//
//     (function readChunk_(i) {
//       var reader = new FileReader();
//
//       // Reads aren't guaranteed to finish in the same order they're started in,
//       // so we need to read + append the next chunk after the previous reader
//       // is done (onload is fired).
//       reader.onload = function(e) {
//         sourceBuffer.appendBuffer(new Uint8Array(e.target.result));
//         logger.log('appending chunk:' + i);
//         if (i == NUM_CHUNKS - 1) {
//           mediaSource.endOfStream();
//         } else {
//           if (video.paused) {
//             video.play(); // Start playing after 1st chunk is appended.
//           }
//           readChunk_(++i);
//         }
//       };
//
//       var startByte = chunkSize * i;
//       var chunk = file.slice(startByte, startByte + chunkSize);
//
//       reader.readAsArrayBuffer(chunk);
//     })(i);  // Start the recursive call by self calling.
//   });
// }
//
// mediaSource.addEventListener('sourceopen', callback, false);
// mediaSource.addEventListener('webkitsourceopen', callback, false);
//
// mediaSource.addEventListener('webkitsourceended', function(e) {
//   logger.log('mediaSource readyState: ' + this.readyState);
// }, false);
//
// function GET(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'arraybuffer';
//   xhr.send();
//
//   xhr.onload = function(e) {
//     if (xhr.status != 200) {
//       alert("Unexpected status code " + xhr.status + " for " + url);
//       return false;
//     }
//     callback(new Uint8Array(xhr.response));
//   };
// }
