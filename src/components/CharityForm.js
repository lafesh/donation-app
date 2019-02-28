import React from 'react';
import '../App.css'

const CharityForm = props => {                   
        return (
            <>        
            <form className="form" onSubmit={props.handleOnSubmit}>
                <div className="form-in">
                <h1 class="form-title">Create New Charity</h1>
                    <input className="form-input" type="text" placeholder="Name" name="name" value={props.input.name} onChange={props.handleOnChange} /> <br />
                    <input className="form-input" type="text" placeholder="Description" name="description" value={props.input.description} onChange={props.handleOnChange} /><br /> 
                    <input className="form-input" type="text" placeholder="Category" name="category" value={props.input.creditCardNumber} onChange={props.handleOnChange} /><br />
                    <input className="form-input" type="text" placeholder="Direct Percentage that goes to Mission " name="rate" value={props.input.rate} onChange={props.handleOnChange} /><br />
                    <input className="form-input" type="text" placeholder="Admin Password" name="pw" value={props.input.cvc} onChange={props.handleOnChange} /><br />
                </div>        
                <input className="btn" type="submit" />
            </form>
            </>
        )
    }

export default CharityForm