import React, {Component} from 'react';
import { Title, Logo } from './styledComponents.js';
import Form from './Form';


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Logo className="center" src={require("./lg.png")}></Logo>
      <Form/>
    </div>
  )
  }
}

export default LoginPage;
