import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {
  ThumbnailText,
  VideoDiv
} from './styledComponents';
import {
  ThumbnailImg,
  ThumbnailDiv
} from '../videoPage/styledComponents';

const DropzoneStyle ={
  height:'100%',
  width:'100%',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class ThumbnailInput extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({files})
    this.props.callBackSetState({
      videoFile : files[0]
    });
  }

  render() {
    return (
      <VideoDiv>
        <Dropzone style={DropzoneStyle} onDrop={this.onDrop.bind(this)}>
          {this.state.files[0] ?
            (
              <ThumbnailText>We have recieved your video, Click/drag another to replace the previous</ThumbnailText>
            ) : <ThumbnailText>Click or drag your video here</ThumbnailText>
          }
        </Dropzone>
      </VideoDiv>
    );
  }
}

export default ThumbnailInput;
