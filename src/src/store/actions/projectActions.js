export const createProject = ( project ) => {
    //normaly we return a object but now we instal thunk we can return a arraw function
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore(); // thats give us a reference to our firestore database
        const profile = getState().firebase.profile; // grab the information profile
        const authorId = getState().firebase.auth.uid; // grab the id of the user
        firestore.collection('projects').add({
            ...project, // same as putting project.title and project.content
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project: project}); // same aside
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        // then() use when firestore write everything first before the dispatch
        // catch() use when we have an error en the database
    }
};