import React from 'react';
import '../App.css'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Link } from 'react-router-dom'

class Charities extends React.Component {
    render() {
        return (  
        <div> 
            <h2>Charites Available for Donations</h2>
                <div class="acc">
                    <Accordion  atomic={true}>
                    {this.props.charities.map(c => 
                            <AccordionItem  title={c.name}>
                            <div class="acc-item">
                                <p>{c.description}</p>
                                <p>{c.rate} of the donations goes to their mission</p>
                                <button className="donate-btn"><Link to="/donate">Donate</Link></button>
                            </div>
                            </AccordionItem>                   
                    )}
                </Accordion>     
                </div>
                   
        </div>  
        )
    }
    
}

export default Charities
