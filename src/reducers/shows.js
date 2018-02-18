import {handleActions} from 'redux-actions';
import {
    showsRequest,
    showsSuccess,
    showsFailure
} from '../actions';

export const showsInitState = { response: {}, isFetching: false };

export const shows = handleActions({
    [showsRequest]: (state, action) => ({...state, isFetching: true}),
    [showsSuccess]: (state, action) => ({...state, response: action.payload, isFetching: false}),
    [showsFailure]: (state, action) => ({...state, isFetching: false})
}, showsInitState);

export const getShows = state => state.shows;