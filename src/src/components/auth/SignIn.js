// class base component
import React, { Component } from 'react';
import { connect } from 'react-redux'; //to connect to redux
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
      email: '',
      password: ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value //target to email or password
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state); // !important video 23, min 10:30
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="transparent">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>  
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null }
                </div>
            </div>
        </form>  
      </div>
    )
  }
}

// we mapStateToProps to get that authError back
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

// we need this so that we can make a dispatch from this component and call "export const signIn" from authActions.js
const mapDispatchToProps = (dispatch) => {
    // this obj represents what we want to attach to the props of the SignIn.js component
    return {
        signIn: (creds) => dispatch(signIn(creds)) // the signIn inside the dispatch method is the one that we import in line four
    }
}

// with connect function, the use connect to redux
export default connect( mapStateToProps, mapDispatchToProps)(SignIn) ;
