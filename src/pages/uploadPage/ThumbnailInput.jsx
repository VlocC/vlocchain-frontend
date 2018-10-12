import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {
  ThumbnailText,
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
      thumbnailFile: files[0]
    });
  }

  render() {
    return (
      <ThumbnailDiv>
        <Dropzone style={DropzoneStyle} onDrop={this.onDrop.bind(this)}>
          {this.state.files[0] ?
            (
              <ThumbnailImg src={this.state.files[0].preview} />
            ) : <ThumbnailText>Click or drag image here</ThumbnailText>
          }
        </Dropzone>
      </ThumbnailDiv>
    );
  }
}

export default ThumbnailInput;
