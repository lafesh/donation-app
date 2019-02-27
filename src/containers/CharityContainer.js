import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharities } from '../actions/charityActions'
import Charities from '../components/Charities'
import NewCharity from '../components/NewCharity'
import Button from '../components/Button'
//import Loading from '../components/Loading'

class CharityContainer extends Component {
    state = {
        click: false
    }
    
  componentDidMount() {
    this.props.fetchCharities()
  }

  handleClick = event => {
      this.setState({
          click: true
      })
  }

  render() {
      return (
          <div>
            {(this.props.charities.length !== 0) ? <Charities charities={this.props.charities} addCharities={this.props.addCharites} /> : 'Loading'}
            {this.state.click ? <NewCharity click={this.state.click} /> : <button className="btn" onClick={this.handleClick}>Add Charity</button>}  
          </div>           
      )
  }
}

const mapStateToProps = ({ charities }) => ({ charities })

export default connect(mapStateToProps, { fetchCharities })(CharityContainer);