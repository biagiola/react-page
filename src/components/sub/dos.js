import React, { Component } from 'react';

class Dos extends Component {
    render() { 
        const { numbers } = this.props;
        const numbersList = numbers.map( number => { 
            return (
                <div key={ number.id }>
                    <span>Number: { number }</span>
                </div>
            );
        });
        return ( 
            <div>
                <span><strong>Component 2</strong></span><br></br>
                { numbersList }
            </div>
            
        );
        
    }
}
 
export default Dos;