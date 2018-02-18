import {handleActions} from 'redux-actions';
import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions';

export const searchInitState = { query: '', serials: [], isFetching: false };

export const search = handleActions({
    [searchRequest]: (state, action) => ({...state, query: action.payload, isFetching: true}),
    [searchSuccess]: (state, action) => ({...state, serials: action.payload, isFetching: false}),
    [searchFailure]: (state, action) => ({...state, isFetching: false}),
}, searchInitState);

export const getSearch = state => state.search;