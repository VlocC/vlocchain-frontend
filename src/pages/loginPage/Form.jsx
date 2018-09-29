import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
      <div className="info">
  		    <div className="form-group row h-10 justify-content-center">
  		        <label className="col-sm-1 col-form-label" id="labels" for="username">Username</label>
  		        <div className="col-sm-5">
  		            <input className="form-control" type="text" name="username" placeholder="Username"></input>
  		        </div>
  	      </div>
  		    <div className="form-group row h-10 justify-content-center">
  		        <label className="col-sm-1 col-form-label" id="labels" for="password">Password</label>
  		        <div className="col-sm-5">
  		            <input className="form-control" type="password" name="password" placeholder="Password"></input>
  		        </div>
  		    </div>
					<div className="form-group row h-20 justify-content-center">
						<div className="col-sm-10">
							<button className="center btn btn-outline-light" type="button" name="register" value="register">Register</button>
							<input className="center btn btn-outline-light" type="submit" name="Sign In" value="Sign In"></input>
						</div>
					</div>
			</div>
     </div>
    )
  }
}

export default Form;
