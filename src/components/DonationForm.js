import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const DonationForm = props => {
        // const inp = []
        // inp = Object.keys(props.input).forEach(key => inp.push(key) )                    
        return (
            <div class="donation">    
            <form className="form" onSubmit={props.handleOnSubmit}>
                <div className="form-in">
                    {/* {inp.map(i =>
                    <>
                        <input className="form-input" type="text" name={i} value={props.input[i]} placeholder={i} onChange={props.handleChange} /> <br />
                    </>
                        )} */}
                    <h1 className="form-title">Fill Out the Form to Donate</h1>
                    <input className="form-input" type="text" placeholder="First Name" name="firstname" value={props.input.firstname} onChange={props.handleOnChange} /> <br />
                    <input className="form-input" type="text" placeholder="Last Name" name="lastname" value={props.input.lastname} onChange={props.handleOnChange} /><br></br>
                    <input className="form-input" type="text" placeholder="Credit Card Number" name="creditCardNumber" value={props.input.creditCardNumber} onChange={props.handleOnChange} /><br></br>
                    <input className="form-input" type="text" placeholder="Expiration Date" name="expirationDate" value={props.input.expirationDate} onChange={props.handleOnChange} /><br></br>
                    <input className="form-input" type="text" placeholder="CVC" name="cvc" value={props.input.cvc} onChange={props.handleOnChange} /><br></br>
                    <input className="form-input" type="text" placeholder="Amount" name="amount" value={props.input.amount} onChange={props.handleOnChange} /><br></br>  
                </div>        
                <Link to='/success'><input className="btn" type="submit" /></Link>
            </form>
            </div>
        )
    }

export default DonationForm