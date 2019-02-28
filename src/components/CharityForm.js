import React from 'react';
import '../App.css'

const CharityForm = props => {                   
        return (
            <>   
            <h1>Create New Charity</h1>
            <form className="form" onSubmit={props.handleOnSubmit}>
                <div className="form-in">
                    <label className="form-label">Name   </label>
                    <input className="form-input" type="text" name="name" value={props.input.name} onChange={props.handleOnChange} /> <br />
                    <label className="form-label">Description    </label>
                    <input className="form-input" type="text" name="description" value={props.input.description} onChange={props.handleOnChange} /><br />
                    <label className="form-label">Category   </label>
                    <input className="form-input" type="text" name="category" value={props.input.creditCardNumber} onChange={props.handleOnChange} /><br />
                    <label className="form-label">Percentage that goes directly towards mission  </label>
                    <input className="form-input" type="text" name="rate" value={props.input.rate} onChange={props.handleOnChange} /><br />
                    <label className="form-label">Admin Password  </label>
                    <input className="form-input" type="text" name="pw" value={props.input.cvc} onChange={props.handleOnChange} /><br />
                </div>        
            <input className="btn" type="submit" />
        </form>
        </>
        )
    }

export default CharityForm