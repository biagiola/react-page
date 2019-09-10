import React, { Component } from 'react'

class Tres extends Component {
    render() { 
        const { members } = this.props;
        const membersList = members.map( member => {
            return (
                <div key={member.id}>
                    <span><strong>Person:</strong> { member.name }</span>
                    <span><strong> Age:</strong> { member.age }</span>
                    <span><strong> Belt:</strong> { member.belt }</span>
                    {/*<button onClick={()=>{ deleteMember(member.id) }}>delete</button>*/}
                    <br></br>
                </div>
            );
        });
        return ( 
           <div>
               <span><strong>Component 3</strong></span><br></br>
               { membersList }
           </div> 
        );
    }
}
 
export default Tres;