import React, { Component } from 'react';
import Form from './Form'

class NewDonation extends Component {
  state = {
    donationAmount: 'Donation Amount in $  -  Example 50.25',
    nameOnCard: 'Cardholder Name',
    creditCardNumber: 'Credit Card Number',
    expirationDate: 'Expiration Date  -  mm/yyyy',
    cvc: 'CVC',
    billingAddress: 'Billing Address',
    cityStateZip:'City, State, Zip'
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({
        donationAmount: 'Donation Amount in $  -  Example 50.25',
        nameOnCard: 'Cardholder Name',
        creditCardNumber: 'Credit Card Number',
        expirationDate: 'Expiration Date  -  mm/yyyy',
        cvc: 'CVC',
        billingAddress: 'Billing Address',
        cityStateZip:'City, State, Zip'
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
