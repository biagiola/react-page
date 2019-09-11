const initState = {
    authError: null
};

//here is where actually manipulate the state
const authReducer = (state = initState, action) => {
    switch( action.type ) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state, 
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state, // we spread the state so we don't overrride anything; initState
                authError: null // then we can override the authError
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;   
    }
}

export default authReducer;