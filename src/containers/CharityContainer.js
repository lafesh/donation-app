import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCharities } from '../actions/charityActions'

class CharityContainer extends Component {
    
  componentDidMount() {
    this.props.fetchCharities()
  }

  render() {
      return (
          <>
            <Charities charities={this.props.charities} />
          </>
      )
  }

}

const mapStateToProps = ({ charities }) => ({ charities })

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCharities }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityContainer);