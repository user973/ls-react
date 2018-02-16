import {handleActions} from 'redux-actions';
import {actionCreators} from '../actions';

export const showsInitState = { response: {}, isFetching: false };

export const shows = handleActions({
    [actionCreators.showsRequest]: (state, action) => ({...state, isFetching: true}),
    [actionCreators.showsSuccess]: (state, action) => ({...state, response: action.payload, isFetching: false}),
    [actionCreators.showsFailure]: (state, action) => ({...state, isFetching: false})
}, showsInitState);

export const getShows = state => state.shows;