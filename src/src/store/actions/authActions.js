export const signIn = (credentials) => { // creadencials are email and password,
    return (dispatch, getState, { getFirebase }) => {
        
        const firebase  = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () =>  {
            dispatch( { type: 'LOGIN_SUCCESS' } );
        }).catch( (err) => {
            dispatch( { type: 'LOGIN_ERROR', err } );
        }); 
    }
} 

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch( { type: 'SIGNOUT_SUCCESS' } );
        });
    }
}

export const signUp = ( newUser ) => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        const firebase = getFirebase(); // we use getFirebase to sign a new user up using auth service by firebase
        const firestore = getFirestore(); // and we need firestore to communicate with our firestore db

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( (resp)  => { // this then return a "promise", this callback function is execute before the firebase auth method, before the response
            // if we use .add rather than .doc, it's gonna add a new id, and we don't to do that, we don't want a second generated id for this newUser, we just used the automatic id that firebase create to newUser, and sync it, and we get that id from "resp"
            return firestore.collection('users').doc(resp.user.uid).set( {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            } );
        } ).then( () => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        } ).catch( err => { // if all fails then...
            dispatch({ type: 'SIGNUP_ERROR', err }); 
        }); 
    } 
}