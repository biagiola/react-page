// class base component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
      title: '',
      content: ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value //target to email or password
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      // when we submit we pass the project that we want to submit
      this.props.createProject(this.state); // after this line is complete this.state pass to mapDispatchToProps (createProject function)
      this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />  
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="transparent">
            <h5 className="grey-text text-darken-3">Create new project</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
        </form>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // here we want to attach auth to the props
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

// coonect is a HOC
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
// why null? well, the first parameter of connect function is map state of props, and we don´t have that