import React, {Component} from 'react';
import {
  FormDiv,
  FieldDiv,
  InputField,
  InputText,
  Footer
} from './styledComponents';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <FormDiv>
          <FieldDiv>
              <InputText>Email</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="username" placeholder="john.doe@gmail.com" />
          </FieldDiv>
          <FieldDiv>
              <InputText>First name</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="firstName" placeholder="John" />
          </FieldDiv>
          <FieldDiv>
              <InputText>Last name</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="lastName" placeholder="Doe" />
          </FieldDiv>
          <FieldDiv>
              <InputText>Password</InputText>
              <InputField onChange={this.props.handleOnChange} type="text" name="password" placeholder="At least 6 characters" />
          </FieldDiv>
          <div className="form-group row h-20 justify-content-center">
            <div className="col-sm-10">
              <input onClick={this.props.handleOnCreateAccount} className="center btn btn-outline-light" type="submit" name="Sign In" value="Create Account!"></input>
            </div>
          </div>
          <Footer onClick={this.props.toggleIsCreate}>Already have an account? <b>Then sign in!</b></Footer>
      </FormDiv>
    )
  }
}

export default CreateAccount;
