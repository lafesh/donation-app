import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const DonationForm = props => {
        // const inp = []
        // inp = Object.keys(props.input).forEach(key => inp.push(key) )                    
        return (
            <>   
            <h1 className="header-space">Fill Out the Form to Donate</h1>
            <form className="form" onSubmit={props.handleOnSubmit}>
                <div className="form-in">
                    {/* {inp.map(i =>
                    <>
                        <input className="form-input" type="text" name={i} value={props.input[i]} placeholder={i} onChange={props.handleChange} /> <br />
                    </>
                        )} */}
                
                    <label className="form-label">First Name   </label>
                    <input className="form-input" type="text" name="firstname" value={props.input.firstname} onChange={props.handleOnChange} /> <br />
                    <label className="form-label">Last Name    </label>
                    <input className="form-input" type="text" name="lastname" value={props.input.lastname} onChange={props.handleOnChange} /><br></br>
                    <label className="form-label">Credit Card Number   </label>
                    <input className="form-input" type="text" name="creditCardNumber" value={props.input.creditCardNumber} onChange={props.handleOnChange} /><br></br>
                    <label className="form-label">Expiration Date  </label>
                    <input className="form-input" type="text" name="expirationDate" value={props.input.expirationDate} onChange={props.handleOnChange} /><br></br>
                    <label className="form-label">CVC  </label>
                    <input className="form-input" type="text" name="cvc" value={props.input.cvc} onChange={props.handleOnChange} /><br></br>
                    <label className="form-label">Amount in $ </label>
                    <input className="form-input" type="text" name="amount" value={props.input.amount} onChange={props.handleOnChange} /><br></br>  
                </div>        
            <Link to='/success'><input className="btn" type="submit" /></Link>
        </form>
        </>
        )
    }

export default DonationForm