import React, { Component } from 'react';
import './App.css';
import CharityContainer from './containers/CharityContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CharityContainer />
        </header>
      </div>
    );
  }
}

export default App;
