// como no va a tener state entonces esto es un funcional component no un statefull component
import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    //console.log(auth);

    const links = auth.uid ? <SignedInLinks profile={ profile }/> : <SignedOutLinks/>;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">Welcome</Link>
                { links }
            </div>
        </nav>   
    )
}
 
// map the state to our props, so that we can access some kind auth status inside our props
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // we attach the auth property to out props inside this navbar
        auth: state.firebase.auth,
        profile: state.firebase.profile  // new we have access to the profile obj and send to const { auth, profile } = props;
    }
}

export default connect(mapStateToProps)(Navbar)