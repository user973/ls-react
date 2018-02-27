import {handleActions} from 'redux-actions';
import {
    authRequest,
    authSuccess,
    authFailure
} from '../actions/auth';

const authInitState = { isAuthorized: false, isFetching: false, token: ''};

export const auth = handleActions({
    [authRequest]: (state, action) => ({...state, token: action.payload.token, isFetching: true}),
    [authSuccess]: (state, action) => ({...state, isAuthorized: true, isFetching: false}),
    [authFailure]: (state, action) => ({...state, isAuthorized: false, token: '', isFetching: false})
}, authInitState);

export default auth;

export const getIsAuthorized = state => state.auth.isAuthorized;

export const getAuthToken = state => state.auth.token;