import {createActions} from 'redux-actions';

export const {

    followersRequest,
    followersSuccess,
    followersFailure
    
} = createActions({

    FOLLOWERS_REQUEST: payload => payload,
    FOLLOWERS_SUCCESS: payload => payload,
    FOLLOWERS_FAILURE: payload => payload

});