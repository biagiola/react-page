import React from 'react';

const Cuatro = ( { members, deleteMember } ) => {
    const membersList = members.map( member => {
        return (
            <div className="member"key={member.id}>
                <span><strong>Person:</strong> { member.name }</span>
                <span><strong> Age:</strong> { member.age }</span>
                <span><strong> Belt:</strong> { member.belt }</span>
                <button onClick={ () => { deleteMember(member.id) } }>delete</button>
                <br></br>
            </div>
        );
    });
    return(
        <div className="ninja-list">
            <span><strong>Component 4</strong></span><br></br>
            { membersList }
            <br></br>
        </div>
    );
}

export default Cuatro;