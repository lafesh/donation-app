import React from 'react'

const Charities = props => {
    return (  
        <div> 
            <h3>Charites Available for Donations</h3>
            {props.charities.map(c => <p key={c.id}>{c.name}</p>)} 
        </div> 
    )
}

export default Charities
