import React, {Component} from 'react';
import Dropzone from 'react-dropzone'
import {
  Title,
  PageContainer,
  ThumbnailImg,
  CreatorDiv,
  CreatorImg
} from './styledComponents.js';

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
    fetch(`http://0.0.0.0:9000/videos/${this.props.match.params.videoId}`, requestOptions)
    .then(res => res.json())
    .then(response => this.setState({...response, infoLoading : false}))
    .catch(error => console.error('Error:', error));
  }

  render() {
    console.warn(this.state);
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        <Title>{this.state.title}</Title>
        <ThumbnailImg src={this.state.thumbnailUrl} />
        <span>created by:</span>
        <CreatorDiv>
          <CreatorImg src={this.state.creator.picture} />
          <h2>{this.state.creator.name}</h2>
        </CreatorDiv>
      </PageContainer>
    )
  }
}

export default VideoPage;
// createdAt: "2018-09-27T06:17:57.368Z"
// creator: {id: "5bac6a3431041907386e1c72", name: "test", picture: "https://gravatar.com/avatar/55502f40dc8b7c769880b10874abc9d0?d=identicon"}
// creatorId: "random"
// description: "This is an awesome sample video"
// duration: "1:34"
// id: "5bac7615a1b3080dd424ba40"
// infoLoading: false
// thumbnailUrl: "https://cdn.gamerant.com/wp-content/uploads/pokemon-go-eevee-evolve-espeon-umbreon-guide.jpg.optimal.jpg"
// title: "Awesome video"
// updatedAt: "2018-09-27T06:17:57.368Z"
