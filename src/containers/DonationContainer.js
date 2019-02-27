import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DonationContainer extends Component {
    
  render() {
      return (
          <div>
            donate
          </div>           
      )
  }
}


export default connect()(DonationContainer);