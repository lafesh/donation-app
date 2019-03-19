import React from 'react'

class SearchBar extends React.Component {
    render() {
         return (
        <>
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" className="form-input" name="search" value={this.props.search} placeholder="Search Charity" onChange={this.props.handleChange} />
                <input type="submit" className="btn" value="Search" />
            </form>

        </>
        )
    }   
}

export default SearchBar