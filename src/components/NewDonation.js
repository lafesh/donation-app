import React, { Component } from 'react';
import '../App.css'
import DonationForm from './DonationForm'


class NewDonation extends Component {
  state = {
    amount: '',
    
    lastname: '',
    creditCardNumber: '',
    expirationDate: '',
    cvc: '',
    firstname: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({
        amount: '',
        
        lastname: '',
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        firstname: '',
    })
  }

  render() {
    return (
      <div>
        
        < DonationForm input={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
};

export default NewDonation;
