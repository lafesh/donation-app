import React, { Component } from 'react';
import './App.css';
import CharityContainer from './containers/CharityContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>You Donate</h1>
        </header>
        <div className="App-body">
        <Router>
          <React.Fragment>
            <Route exact path="/charities" component={CharityContainer}/>
          </React.Fragment>
        </Router>   
        </div>
      </div>
    );
  }
}

export default App;
