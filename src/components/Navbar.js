import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    /*setTimeout(() => {
        props.history.push('/about')
    }, 2000)*/
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
    //withRouter (high orther component) utilizamos esto porque, <browser> trae muchasf unciones que son agregadas a los props About, Contact, Home
    //pero a <Navbar> por defecto no le agrega entonces usamos el withRouter como una forma de wrap que lo encapsule y tenga
    //las misma propiedades que los demas <Router ...> supercharge the component

    //en el caso de setTimeout usamos ese props que necesitamos.
}
export default withRouter(Navbar);