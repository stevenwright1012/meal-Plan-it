import React, { Component } from 'react';
import router from './router';
import './styles/reset.css';
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
