import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {
  LogoText,
  HeaderContainer,
  ButtonContainer,
  Button
} from './styledComponents.js';

const activeStyle = {
  'backgroundColor': 'red'
}

class VideoPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderContainer>
        <LogoText>VlocC</LogoText>
        <ButtonContainer>
          <NavLink to='/' exact activeStyle={activeStyle} >
            <Button>
              Browse
            </Button>
          </NavLink>
          <NavLink to='/video' activeStyle={activeStyle} >
            <Button>
              Videos
            </Button>
          </NavLink>
          <Button>Setting</Button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default VideoPage;
