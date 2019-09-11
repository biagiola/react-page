import React from 'react';
import { NavLink } from 'react-router-dom'; //con esto tenemos "active class" cuando estamos dentro de un link seleccionado

const SignedOutLinks = () => {
    return (
         <ul className="right">
             <li><NavLink to='/signup'>Signup</NavLink></li>
             <li><NavLink to='/signin'>Login</NavLink></li>
         </ul>
    )
}

export default SignedOutLinks;