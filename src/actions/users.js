import {createActions} from 'redux-actions';

export const {

    usersRequest,
    usersSuccess,
    usersFailure
    
} = createActions({

    USERS_REQUEST: payload => payload,
    USERS_SUCCESS: payload => payload,
    USERS_FAILURE: payload => payload

});