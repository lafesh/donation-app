import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const Form = props => {             
    return (   
        <form className="form" onSubmit={props.handleOnSubmit}>  
            {Object.keys(props.input).map(key => 
            <><input className="form-input" type="text" name={key} defaultValue={props.input[key]} placeholder={key} onChange={props.handleOnChange} /> <br /></>
                )}           
            {(props.input.pw === '') ? <input className="form-btn" type="submit" /> : <Link to='/success'><input className="form-btn" type="submit" /></Link>}          
        </form>
    )
    }

export default Form