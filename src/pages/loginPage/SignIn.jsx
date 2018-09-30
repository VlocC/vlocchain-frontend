import React, {Component} from 'react';
import {
  FormDiv,
  FieldDiv,
  InputField,
  InputText,
  Footer,
  CenterDiv
} from './styledComponents';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <FormDiv>
        <CenterDiv>
          <FieldDiv className="row">
              <InputText>Username</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="username" placeholder="Username" />
          </FieldDiv>
          <FieldDiv className="row">
              <InputText>Password</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="password" placeholder="Password" />
          </FieldDiv>
        </CenterDiv>
          <div className="form-group row h-20 justify-content-center">
            <div className="col-sm-10">
              <input onClick={this.props.handleOnSignIn} className="center btn btn-outline-light" type="submit" name="Sign In" value="Sign In"></input>
            </div>
          </div>
          <Footer onClick={this.props.toggleIsCreate}>Don't have an account? <b>Then create one!</b></Footer>
      </FormDiv>
    )
  }
}

export default Form;
