import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


class NewDonation extends Component {
  state = {
    firstname: '',
    lastname: '',
    creditCardNumber: '',
    expirationDate: '',
    cvc: '',
    amount: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    //this.props.addRestaurant(this.state.text) outside submission api to bank? render donation confirmation - with link?
    this.setState({
        firstname: '',
        lastname: '',
        creditCardNumber: '',
        expirationDate: '',
        cvc: '',
        amount: ''
    })
  }

  render() {
    return (
      <div>
        <h1 className="header-space">Fill Out the Form to Donate</h1>
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-in">
                <label className="form-label">First Name   </label>
                <input className="form-input" type="text" name="firstname" value={this.state.firstname} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Last Name    </label>
                <input className="form-input" type="text" name="lastname" value={this.state.lastname} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Credit Card Number   </label>
                <input className="form-input" type="text" name="creditCardNumber" value={this.state.creditCardNumber} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Expiration Date  </label>
                <input className="form-input" type="text" name="expirationDate" value={this.state.expirationDate} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">CVC  </label>
                <input className="form-input" type="text" name="cvc" value={this.state.cvc} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Amount in $ </label>
                <input className="form-input" type="text" name="amount" value={this.state.amount} onChange={(event) => this.handleOnChange(event)} /><br></br>
                
            </div>
            
            <Link to='/success'><input className="btn" type="submit" /></Link>
        </form>
      </div>
    );
  }
};

export default NewDonation;
