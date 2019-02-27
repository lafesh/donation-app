import React, { Component } from 'react';
import './App.css';
import CharityContainer from './containers/CharityContainer'
import Success from './components/Success'
import DonationContainer from './containers/DonationContainer'
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
            <Route exact path="/" component={CharityContainer}/> 
            
            <Route exact path="/donate" component={DonationContainer}/>
            <Route exact path="/success" component={Success}/>

          </React.Fragment>
        </Router>   
        </div>
      </div>
    );
  }
}

export default App;
