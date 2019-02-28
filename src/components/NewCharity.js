import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharity } from '../actions/charityActions'
import Form from './Form'

class NewCharity extends Component {
  state = {
    name: '',
    description: '',
    category: '',
    rate: '',
    pw: '',
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
        name: '',
        description: '',
        category: '',
        rate: '',
        pw: '',
        click: false,
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
