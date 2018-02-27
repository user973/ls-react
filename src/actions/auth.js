import {createActions} from 'redux-actions';

export const {

    authRequest,
    authSuccess,
    authFailure
    
} = createActions({

    AUTH_REQUEST: payload => payload,
    AUTH_SUCCESS: payload => payload,
    AUTH_FAILURE: payload => payload

});