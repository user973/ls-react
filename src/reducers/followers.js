import {handleActions} from 'redux-actions';
import {
    followersRequest,
    followersSuccess,
    followersFailure
} from '../actions/followers';

const followersInitState = { response: null, isFetching: false };

export const followers = handleActions({
    [followersRequest]: (state, action) => ({...state, isFetching: true}),
    [followersSuccess]: (state, action) => ({...state, response: action.payload, isFetching: false}),
    [followersFailure]: (state, action) => ({...state, response: null, isFetching: false})
}, followersInitState);

export default followers;

export const getFollowers = state => state.followers;

export const getFollowersIsFetching = state => state.followers.isFetching;