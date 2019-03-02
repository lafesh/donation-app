import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharities } from '../actions/charityActions'
import Charities from '../components/Charities'
import NewCharity from '../components/NewCharity'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'

class CharityContainer extends Component {
    state = {
        click: false,
        search: '',
        charities: []
    }
    
  componentDidMount() {
    this.props.fetchCharities()
  }

  handleClick = () => {
    this.setState({
        click: !this.state.click
    })
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState({
      charities: this.props.charities.filter(c => c.name.toLowerCase().includes(this.state.search.toLowerCase())),
      search: ''
    })
  }

  render() {
      return (
          <div>
            <h1>Charites Available for Donations</h1>
            <SearchBar search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            {(this.props.charities.length === 0) ? <Loading /> : <Charities charities={(this.state.charities.length === 0 ? this.props.charities : this.state.charities)} /> }            
            {this.state.click ? <NewCharity handleClick={this.handleClick} /> : <button className="btn" onClick={this.handleClick}>Add Charity</button>}  
          </div>           
      )
  }
}

const mapStateToProps = ({ charities }) => ({ charities })

export default connect(mapStateToProps, { fetchCharities })(CharityContainer);