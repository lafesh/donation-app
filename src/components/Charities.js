import React from 'react';
import '../App.css'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Link } from 'react-router-dom'

class Charities extends React.Component {
    render() {
        return (  
        <div> 
            <div className="acc">
                <Accordion atomic={true}>
                    {this.props.charities.map(c => 
                        <AccordionItem key={c.id} title={c.name}>
                            <div className="acc-item">
                                <h3>{c.category}</h3>
                                <p>{c.rate} of the donations goes to their mission</p>
                                <p>{c.description}</p>
                                <button className="btn"><Link to="/donate">Donate</Link></button>
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
