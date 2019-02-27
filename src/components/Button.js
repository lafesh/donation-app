import React from 'react'
import { Link } from 'react-router-dom'


class Button extends React.Component {
    render () {
        return (
            <button className="btn"><Link to="/newCharity">Add Charity</Link></button>
        )
    }
} 

export default Button