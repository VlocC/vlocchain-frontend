import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

const VideoPlayerStyles = {
  width: '100%',
  height: '100%',
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {infoLoading: true};
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    this.connection = null;
    this.myMediaSource = null;
    this.streamUrl = null;
    this.codecs = null;
    console.warn("Is mp4 supported", MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))
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

      this.setState({...response})
    })
    .catch(error => console.error('Error:', error));
  }

  getVideoSource = (id) => {
    this.connection.send(`START:${id}`);
  }

  handleSourceOpen = () => {
    console.warn('In handle Source Open')
    this.connection.send(`START:${this.props.match.params.videoId}`);
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
    this.myMediaSource = new MediaSource();
    console.warn(this.myMediaSource)
    this.streamUrl = URL.createObjectURL(this.myMediaSource);
    this.myMediaSource.addEventListener('sourceopen', this.handleSourceOpen);
    this.setState({infoLoading: false});

  }

  handleOnError = (error) => {
    console.error("There was a connection error");
  }

  handleOnMessage = (message) => {
    console.log(this.streamUrl)
    if (typeof message.data === 'string') {
      this.codecs = message.data;
    } else {
      const videoSourceBuffer = this.myMediaSource
      .addSourceBuffer(this.codecs);

      videoSourceBuffer.addEventListener('updateend', () => {
        this.myMediaSource.endOfStream();
        console.log(this.myMediaSource.readyState); // ended
      });

      console.log(videoSourceBuffer)

      videoSourceBuffer.appendBuffer(new Uint8Array(message.data));
      console.log(this.myMediaSource)
    }
  }

  render() {
    const timeCreated = new Date(this.state.createdAt)
    console.warn(this.state);
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        <Title>{this.state.title}</Title>
        <ThumbnailDiv>
          <video 
            style={VideoPlayerStyles}
            poster={`https://s3.csh.rit.edu/vlocchain/${this.props.match.params.videoId}.jpg`}
            controls
            src={this.streamUrl}
            autoPlay
          />
        </ThumbnailDiv>
        <SubContainer>
          <CreatorDiv style={{width: '100%'}}>
            <Link to={`/creator/${this.state.creator.id}`}>
              <CreatorDiv>
                <CreatorImg src={this.state.creator.picture} />
                <h2>{this.state.creator.name}</h2>
              </CreatorDiv>
            </Link>
            <h3 style={{color: 'white'}}>{`${timeCreated.getMonth()} ${timeCreated.getDate()}, ${timeCreated.getFullYear()}`}</h3>
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
