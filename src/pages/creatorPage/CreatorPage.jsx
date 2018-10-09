import React, {Component} from 'react';
import {
  PageContainer,
  Title,
  CreatorPic
} from './styledComponents.js';

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
  }

  render() {
    const timeCreated = new Date(this.state.createdAt)
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        <Title>{this.state.name}</Title>
        <CreatorPic />
      </PageContainer>
    )
  }
}

export default CreatorPage;
