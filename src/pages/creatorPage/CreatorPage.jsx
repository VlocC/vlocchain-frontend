import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {
  PageContainer,
  Title,
  CreatorPic
} from './styledComponents';
import {
  BrowseGrid,
  BrowseItem,
  BrowseItemAuthor,
  BrowseItemThumbnail,
  BrowseItemTitle
} from '../browsePage/styledComponents';

class CreatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {infoLoading: true};
  }

  componentDidMount() {
    console.warn("here");
    fetch(`http://0.0.0.0:9000/users/${this.props.match.params.creatorId}`)
    .then(res => res.json())
    .then(response => this.setState({...response, infoLoading: false}))
    .catch(error => console.error('Error:', error));

    fetch(`http://0.0.0.0:9000/videos?creator=${this.props.match.params.creatorId}`)
    .then(res => res.json())
    .then(items => this.setState({items}))
    .catch(error => console.error('Error:', error));
  }

  renderVideos() {
    //TODO Add an onclick to go to the creators page
    return this.state.items ? this.state.items.map((item) => {
        return (
          <BrowseItem key={item.id}>
            <Link to={`/video/${item.id}`}>
              <BrowseItemThumbnail src={`https://s3.csh.rit.edu/vlocchain/${item.id}.jpg`} />
            </Link>
            <BrowseItemTitle>{item.title}</BrowseItemTitle>
            <Link to={`/creator/${item.creator.id}`}>
              <BrowseItemAuthor>{item.creator.name}</BrowseItemAuthor>
            </Link>
          </BrowseItem>
        );
      })
    : <div>Sorry no Videos</div>   
  }

  render() {
    console.warn(this.state)
    const timeCreated = new Date(this.state.createdAt)
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        <Title>{this.state.name}</Title>
        <CreatorPic src={this.state.picture} />
        <BrowseGrid>
          {this.renderVideos()}
        </BrowseGrid>
      </PageContainer>
    )
  }
}

export default CreatorPage;
