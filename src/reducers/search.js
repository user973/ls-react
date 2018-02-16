import {handleActions} from 'redux-actions';
import {actionCreators} from '../actions';

export const searchInitState = { query: '', serials: [], isFetching: false };

export const search = handleActions({
    [actionCreators.searchRequest]: (state, action) => ({...state, query: action.payload, isFetching: true}),
    [actionCreators.searchSuccess]: (state, action) => ({...state, serials: action.payload, isFetching: false}),
    [actionCreators.searchFailure]: (state, action) => ({...state, isFetching: false}),
}, searchInitState);

export const getSearch = state => state.search;