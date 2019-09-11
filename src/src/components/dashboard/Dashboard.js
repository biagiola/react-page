// Class base component o sea tiene state
import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; // connect it's a higher order component
import { firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        //console.log(this.props);
        const { projects, auth } = this.props;
        if ( !auth.uid ) return <Redirect to='/signin' />
         return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    console.log(state);
    return {
        // this object is gonna represent which properties are attached to the props of this component so we can access them inside this component
        projects: state.firestore.ordered.projects, //project from rootReducer; projects from projectReducer property
        auth: state.firebase.auth
    }
}

// Using two HOC's
export default compose (
    connect(mapsStateToProps),
    firestoreConnect([
        { collection: 'projects' } // the project that we want to collect from firebase 
    ])
)(Dashboard);
// connect is a function whichs returns a higher other component to take in the dashboard
// we pass mapStateToProps's function as parameter to connect, so the connect function knows what to connect to, what data to get from the store
// we're mapping that to our props object in here (Dashboard.js) so now we could do is access props.projects inside this component and it would get the data