import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; //this is a premade reducer and is made for syncing our firestore data with our state in the background and this reducer will know about our firebase project online and how to access it because we already passed in our firebase config to our store in the index file 
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer // tell us if he is connect or not, true-false
});

export default rootReducer;