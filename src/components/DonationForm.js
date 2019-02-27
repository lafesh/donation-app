import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

class DonationForm extends Component {
    render() {
        // const inp = []
        // inp = Object.keys(this.props.input).forEach(key => inp.push(key) )
                      
        return (
            <>   
            <h1 className="header-space">Fill Out the Form to Donate</h1>
            <form className="form" onSubmit={this.props.handleOnSubmit}>
                <div className="form-in">
                    {/* {inp.map(i =>
                    <>
                        <input className="form-input" type="text" name={i} value={this.props.input[i]} placeholder={i} onChange={this.props.handleChange} /> <br />
                    </>
                        )} */}
                
                    <label className="form-label">First Name   </label>
                    <input className="form-input" type="text" name="firstname" value={this.props.input.firstname} onChange={this.props.handleOnChange} /> <br />
                    <label className="form-label">Last Name    </label>
                    <input className="form-input" type="text" name="lastname" value={this.props.input.lastname} onChange={this.props.handleOnChange} /><br></br>
                    <label className="form-label">Credit Card Number   </label>
                    <input className="form-input" type="text" name="creditCardNumber" value={this.props.input.creditCardNumber} onChange={this.props.handleOnChange} /><br></br>
                    <label className="form-label">Expiration Date  </label>
                    <input className="form-input" type="text" name="expirationDate" value={this.props.input.expirationDate} onChange={this.props.handleOnChange} /><br></br>
                    <label className="form-label">CVC  </label>
                    <input className="form-input" type="text" name="cvc" value={this.props.input.cvc} onChange={this.props.handleOnChange} /><br></br>
                    <label className="form-label">Amount in $ </label>
                    <input className="form-input" type="text" name="amount" value={this.props.input.amount} onChange={this.props.handleOnChange} /><br></br>  
                </div>        
            <Link to='/success'><input className="btn" type="submit" /></Link>
        </form>
        </>
        )
        

    }


}

export default DonationForm