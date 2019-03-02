import React from 'react'
import { Link } from 'react-router-dom'

//import Charities from '../components/Charities'

class SearchBar extends React.Component {
    // state = {
    //     search: '',
    //     charities: []
    // }

    // handleChange = (event) => {
    //     this.setState({
    //       search: event.target.value
    //     })
    //   }
    
    //   handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //       charities: this.props.allCharities.filter(c => c.name.toLowerCase().includes(this.state.search.toLowerCase())),
    //       search: ''
    //     })
    //   }

    render() {
         return (
        <>
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" className="form-input" name="search" value={this.props.search} placeholder="Search Charity" onChange={this.props.handleChange} />
                <input type="submit" className="btn" value="Search" />
            </form>

            {/* {this.state.charities.length > 0 ? <Charities charities={this.state.charities} /> : null } */}
        </>
    )
    }
   
}

export default SearchBar