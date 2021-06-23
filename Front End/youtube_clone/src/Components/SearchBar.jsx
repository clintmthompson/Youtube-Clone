import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchValue: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.getVideo(this.state.searchValue);

        }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchValue" onChange={this.handleChange} value={this.state.searchValue}/>
                    <button type='submit'>Search</button>    
                </form>
            </div>
         );
    }
}



export default SearchBar;