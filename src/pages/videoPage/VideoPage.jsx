import React, {Component} from 'react';
import { Title } from './styledComponents.js';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {infoLoading: true};
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET"
    }
    console.warn("here");
    fetch('http://0.0.0.0:9000/videos/5bac7615a1b3080dd424ba40', requestOptions)
    .then(res => res.json())
    .then(response => this.setState({...response, infoLoading : false}))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return this.state.infoLoading ? <div>Loading</div> : (
     <Title>{this.state.title}</Title>
   )
  }
}

export default VideoPage;
