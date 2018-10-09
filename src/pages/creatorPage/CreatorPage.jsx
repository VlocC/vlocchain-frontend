import React, {Component} from 'react';
import {
  PageContainer,
} from './styledComponents.js';

class CreatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {infoLoading: false};
  }

  componentDidMount() {
    console.warn("here");
    fetch(`http://0.0.0.0:9000/user/${this.props.match.params.creatorId}`)
    .then(res => res.json())
    .then(response => console.warn(response))
    .catch(error => console.error('Error:', error));
  }

  render() {
    const timeCreated = new Date(this.state.createdAt)
    return this.state.infoLoading ? <div>Loading</div> : (
      <PageContainer>
        Hiya!
      </PageContainer>
    )
  }
}

export default CreatorPage;
