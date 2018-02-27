import {handleActions} from 'redux-actions';
import {authRequest, authSuccess, authFailure} from '../actions/auth';


const usersInitState = { isFetching: false, data: null, error: null };

export const users = handleActions({
    [authRequest]: (state, action) => ({...state, isFetching: true, data: null, error: null}),
    [authSuccess]: (state, action) => ({...state, isFetching: false, data: action.payload, error: null}),
    [authFailure]: (state, action) => ({...state, isFetching: false, data: null, error: action.payload})
}, usersInitState);

export default users;

export const getUsers = state => state.users;

export const getUsersIsFetching = state => state.users.isFetching;