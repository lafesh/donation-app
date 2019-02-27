import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDonation from '../components/NewDonation'

class DonationContainer extends Component {
    
  render() {
      return (
          <div>
            <NewDonation />
            {/* paypal component */}
          </div>           
      )
  }
}


export default connect()(DonationContainer);