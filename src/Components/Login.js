import React, { Component } from 'react';

class Login extends Component {
  render() {
    const {REACT_APP_LOGIN} = process.env
    return (
      <div className="Login_Container">
        <p className="login_button">
            <a href={REACT_APP_LOGIN}>
                LOGIN
            </a>
        </p>
        <div className="welcome" >
          <h1>Welcome To Meal Plan it</h1>
        </div>
      </div>
    );
  }
}

export default Login;