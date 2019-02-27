import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharities } from '../actions/charityActions'
import Charities from '../components/Charities'
//import Loading from '../components/Loading'

class CharityContainer extends Component {
    
  componentDidMount() {
    this.props.fetchCharities()
  }

  render() {
      return (
          <div>
            {(this.props.charities.length !== 0) ? <Charities charities={this.props.charities} addCharities={this.props.addCharites} /> : 'Loading'}
          </div>           
      )
  }
}

const mapStateToProps = ({ charities }) => ({ charities })

export default connect(mapStateToProps, { fetchCharities })(CharityContainer);