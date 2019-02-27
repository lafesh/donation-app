import React, { Component } from 'react';
import '../App.css'

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

    fetch('http://localhost:5000/charities', {
        method: 'post',
        
        body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            category: this.state.description,
            rate: this.state.rate,
            pw: this.state.pw
         }) 
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

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
                <label className="form-label">Password </label>
                <input className="form-input" type="text" name="pw" value={this.state.pw} onChange={(event) => this.handleOnChange(event)} /><br></br>
            </div>
            
            <input className="btn" type="submit" />
        </form>
      </div>
    );
  }
};

export default NewCharity;