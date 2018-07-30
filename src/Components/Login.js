import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Login extends Component {
  render() {
    const {REACT_APP_LOGIN} = process.env
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <a href={REACT_APP_LOGIN}>
                LOGIN
            </a>
        </p>
      </div>
    );
  }
}

export default Login;