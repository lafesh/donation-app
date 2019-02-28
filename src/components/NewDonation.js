import React, { Component } from 'react';
import Form from './Form'

class NewDonation extends Component {
  state = {
    donationAmount: '',
        nameOnCard: '',
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        billingAddress: '',
        cityStateZip:''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({
        donationAmount: '',
        nameOnCard: '',
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        billingAddress: '',
        cityStateZip:''
    })
  }

  render() {
    return (
      <div className="form-in"> 
        <h1 className="form-title">Fill Out the Form to Donate</h1>
        < Form input={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
};

export default NewDonation;
