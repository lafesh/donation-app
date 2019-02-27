import React, { Component } from 'react';
import '../App.css';
import Charities from './Charities'
import { connect } from 'react-redux';
import { addCharity } from '../actions/charityActions'
import { Link } from 'react-router-dom'


class NewCharity extends Component {
  state = {
    name: '',
    description: '',
    category: '',
    rate: '',
    pw: '',
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.props.addCharity({
        charity: {
            name: this.state.name,
            description: this.state.description,
            category: this.state.description,
            rate: this.state.rate,
            pw: this.state.pw    
    }})

    this.setState({
        name: '',
        description: '',
        category: '',
        rate: '',
        pw: '',
    })
  }

  render() {
    return (
      <div>

        <h1>Create New Charity</h1>
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-in">
                <label className="form-label">Name  </label>
                <input className="form-input" type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Description    </label>
                <input className="form-input" type="text" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Category    </label>
                <input className="form-input" type="text" name="category" value={this.state.category} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Percentage that goes directly towards mission  </label>
                <input className="form-input" type="text" name="rate" value={this.state.rate} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Admin Password </label>
                <input className="form-input" type="text" name="pw" value={this.state.pw} onChange={(event) => this.handleOnChange(event)} /><br></br>
            </div>
            <input className="btn" type="submit" />
            {/* <Link to={{ pathname: '/charities', state: {fromDashboard: true}}}><input className="btn" type="submit" /></Link> */}
        </form>
        {/* <Charities charities={this.props.charities} /> */}
      </div>
    );
  }
};

const mapStateToProps = ({ charities }) => ({ charities })

export default connect(mapStateToProps, { addCharity })(NewCharity);
