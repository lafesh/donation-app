import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharity } from '../actions/charityActions'
import Form from './Form'

class NewCharity extends Component {
  state = {
      name: 'Charity Name',
      description: 'Description',
      category: 'Category',
      rate: 'Direct Percentage that goes to their Mission',
      pw: 'Admin Password',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    this.props.addCharity({
        charity: this.state 
    })

    this.props.handleClick()

    this.setState({
        name: 'Charity Name',
        description: 'Description',
        category: 'Category',
        rate: 'Direct Percentage that goes to their Mission',
        pw: 'Admin Password',
    })
  }

  render() {
    return (
      <div className="form-in">
        <h1 className="form-title">Create New Charity</h1>
        <Form input={this.state} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
};

export default connect(null, { addCharity })(NewCharity);
