import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCharities } from '../actions/charityActions'
import Charities from '../components/Charities'

class CharityContainer extends Component {
    
  componentDidMount() {
    this.props.fetchCharities()
  }

  render() {
      debugger
      return (
          <>
            <Charities charities={this.props.charities}/>
          </>
      )
  }

}

const mapStateToProps = state => { return {charities: state.charities}}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCharities }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityContainer);