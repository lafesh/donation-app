import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DonationInput from '../components/DonationInput'

class DonationContainer extends Component {
    
  render() {
      return (
          <div>
            <DonationInput />
            {/* paypal component */}
          </div>           
      )
  }
}


export default connect()(DonationContainer);