import React, { Component } from 'react';

class Uno extends Component {
    render(){
        const { name, age, text } = this.props
        return (
            <div className='post card' >
                <span><strong>Component 1</strong></span><br></br>
                <div className='card-content'>                            
                    <span className='card-title'><strong>Name:</strong> { this.props.name }</span>
                    <span className='card-title'><strong> Age:</strong>  { this.props.age }</span>
                    <span className='card-title'><strong> text:</strong>  { this.props.text }</span>
                </div>
            </div>
        );
    }
}

export default Uno;