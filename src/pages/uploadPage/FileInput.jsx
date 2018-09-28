import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {
  DropzoneContainer,
  FileInputContainer
} from './styledComponents';

const DropzoneStyle ={
  height:'100%',
  width:'100%'
}

class FileInput extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <DropzoneContainer>
        <Dropzone style={DropzoneStyle} onDrop={this.onDrop.bind(this)}>
          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
      </DropzoneContainer>
    );
  }
}

export default FileInput;
