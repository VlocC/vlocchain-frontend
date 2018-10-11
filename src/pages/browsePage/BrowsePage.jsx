import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  BrowseWrapper,
  BrowseGrid,
  BrowseItem,
  BrowseItemAuthor,
  BrowseItemThumbnail,
  BrowseItemTitle
} from './styledComponents.js';

class BrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    }
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET"
    }
    fetch(`http://0.0.0.0:9000/videos`, requestOptions)
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
    return (
      <BrowseWrapper>
        <Title>These vloccs are hot :fire:</Title>
        <BrowseGrid>
          {this.renderVideos()}
        </BrowseGrid>
      </BrowseWrapper>
    )
  }
}

export default BrowsePage;
