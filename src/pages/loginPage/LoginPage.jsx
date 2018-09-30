import React, {Component} from 'react';
import {
  Title,
  Logo,
  LoginPageDiv,
  ErrorBanner,
  CenterDiv
} from './styledComponents.js';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import LogoImage from './lg.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isCreate: false
    }
  }

  handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  toggleIsCreate = () => {
    this.setState({isCreate: !this.state.isCreate});
  }

  handleOnCreateAccount = () => {
    const {username, password} = this.state;
    console.warn('create account')

    const requestOptions = {
      body: `email=${username}&password=${password}&access_token=Kjt1SqUTappFNl8BMbULbMfFsQFGy5tF`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    };

    fetch(`http://0.0.0.0:9000/users`, requestOptions)
    .then(res => {
      if (res.status >= 400 && res.status < 600) {
        throw new Error("Bad response from server");
      }
      return res.json();
    }).then(response => {
      localStorage.setItem('VLOCC_TOKEN', response.token);
      window.location.replace(`${window.location.origin}`);
    }).catch(error => {
      console.error('Error:', error);
      this.setState({hadError: true})
    });
  }

  handleOnSignIn = () => {
    const {username, password} = this.state;
    console.warn('sign in');

    const requestOptions = {
      body: "access_token=Kjt1SqUTappFNl8BMbULbMfFsQFGy5tF",
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    };

    fetch(`http://0.0.0.0:9000/auth`, requestOptions)
    .then(res => {
      if (res.status >= 400 && res.status < 600) {
        throw new Error("Bad response from server");
      }
      return res.json();
    }).then(response => {
      console.warn(response);
      localStorage.setItem('VLOCC_TOKEN', response.token);
      window.location.replace(`${window.location.origin}`);
    }).catch(error => {
      console.error('Error:', error);
      this.setState({hadError: true})
    });
  }

  render() {
    console.warn(this.state);
    return (
      <LoginPageDiv>
        {this.state.hadError ? <ErrorBanner>There was an error!</ErrorBanner> : null}
        <Logo className="center" src={LogoImage} />
        {
          this.state.isCreate ?
            <CreateAccount toggleIsCreate={this.toggleIsCreate} handleOnCreateAccount={this.handleOnCreateAccount} handleOnChange={this.handleOnChange}/>
          :
            <SignIn toggleIsCreate={this.toggleIsCreate} handleOnSignIn={this.handleOnSignIn} handleOnChange={this.handleOnChange}/>
        }
      </LoginPageDiv>
    )
  }
}

export default LoginPage;
