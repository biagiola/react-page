import React, { Component } from 'react';

class Cinco extends Component {
    state = { 
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMember(this.state);
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div><strong>Component 5</strong></div>
                    <label htmlFor="name">Name: </label>
                    <input type='text' id="name" onChange={ this.handleChange }/>
                    <label htmlFor="age">Age: </label>
                    <input type='text' id="age" onChange={ this.handleChange }/>
                    <label htmlFor="belt">Belt: </label>
                    <input type='text' id="belt" onChange={ this.handleChange }/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Cinco;

