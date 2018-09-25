import React, {Component} from 'react';
import {
  LogoText,
  HeaderContainer,
  ButtonContainer,
  Button
} from './styledComponents.js';

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <LogoText>VlocC</LogoText>
        <ButtonContainer>
          <Button>Video</Button>
          <Button>User</Button>
          <Button>Setting</Button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default VideoPage;
