import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const {REACT_APP_LOGOUT} = process.env
    return (
      <div className="Dashboard-container">
        <div className="test" ></div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Dashboard
        </p>
        <p className="App-intro">
          <a href={REACT_APP_LOGOUT}>
            LOGOUT
          </a>
        </p>
      </div>
    );
  }
}

export default Dashboard;