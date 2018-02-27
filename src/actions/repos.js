import {createActions} from 'redux-actions';

export const {

    reposRequest,
    reposSuccess,
    reposFailure
    
} = createActions({

    REPOS_REQUEST: payload => payload,
    REPOS_SUCCESS: payload => payload,
    REPOS_FAILURE: payload => payload

});