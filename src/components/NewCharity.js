import React, { Component } from 'react';
import '../App.css'

class NewCharity extends Component {
  state = {
    name: '',
    description: '',
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
    //this.props.addRestaurant(this.state.text) outside submission api to bank? render donation confirmation - with link?
    this.setState({
        name: '',
        description: '',
        rate: '',
        pw: '',
    })
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-in">
                <label className="form-label">Name  </label>
                <input className="form-input" type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Description    </label>
                <input className="form-input" type="text" value={this.state.description} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Percentage that goes directly towards mission  </label>
                <input className="form-input" type="text" value={this.state.rate} onChange={(event) => this.handleOnChange(event)} /><br></br>
                <label className="form-label">Password </label>
                <input className="form-input" type="text" value={this.state.pw} onChange={(event) => this.handleOnChange(event)} /><br></br>
            </div>
            
            <input className="btn" type="submit" />
        </form>
      </div>
    );
  }
};

export default NewCharity;