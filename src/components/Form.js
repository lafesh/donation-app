import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const Form = props => {        
    return (   
        <form className="form" onSubmit={props.handleOnSubmit}>  
            {Object.keys(props.input).map((k, index) => 
                <div key={index}><input className="form-input" type="text" name={k} value={props.input.k} placeholder={props.input[k]} onChange={props.handleOnChange} required /></div>
            )}           
            {(props.input.pw !== undefined) ? <input className="form-btn" type="submit" /> : <Link to='/success'><input className="form-btn" type="submit" /></Link>}          
        </form>
    )
}

export default Form