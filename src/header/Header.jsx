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
          <NavLink to='/' exact activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Browse
            </Button>
          </NavLink>
          <NavLink to='/video' activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Videos
            </Button>
          </NavLink>
          <NavLink to='/upload' activeStyle={activeStyle} style={{height : '100%'}}>
            <Button>
              Upload
            </Button>
          </NavLink>
          <Button>Setting</Button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default VideoPage;
