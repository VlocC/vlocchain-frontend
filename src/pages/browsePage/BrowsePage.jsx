import React, {Component} from 'react';
import {
  Title,
  BrowseWrapper,
  BrowseGrid,
  BrowseItem,
  BrowseItemAuthor,
  BrowseItemThumbnail,
  BrowseItemTitle
} from './styledComponents.js';

// TODO get the data from the backend
const ITEMS = [
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'red'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'blue'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'green'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'purple'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'yellow'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'navy'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'white'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'red'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'blue'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'green'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'purple'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'yellow'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'navy'
  },
  {
    author: 'Owen Sullivan',
    title: 'An example',
    color: 'white'
  },
]

class BrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ITEMS
    }
  }

  // TODO Add an onClick to route them to the corret /video page
  renderVideos() {
    return this.state.items.map((item) => {
      return (
        <BrowseItem>
          <BrowseItemThumbnail style={{backgroundColor: item.color}} />
          <BrowseItemTitle>{item.title}</BrowseItemTitle>
          <BrowseItemAuthor>{item.author}</BrowseItemAuthor>
        </BrowseItem>
      );
    })
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
