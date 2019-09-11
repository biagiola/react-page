// class base component
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value //target to email or password
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signUp(this.state); // this.state represents the newUser which we pass into mapsDispatchToProps.
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstName" onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastName" onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null }
                </div>
            </div>
        </form>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError // This state is used when a user have to signup and he enter a wrong data, this state  "authError" and "auth" is passed to the const { auth, authError} = this.props;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch( signUp(newUser) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
