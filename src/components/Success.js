import React from 'react'
import { Link } from 'react-router-dom'

class Success extends React.Component {
    render () {
        return (
            <>
                <h1>Thank you for your generous donation!</h1>
                <Link to='/'><button className="btn">Show Charities</button></Link>
            </>
        )
    }
} 

export default Success