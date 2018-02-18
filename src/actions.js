import {createActions} from 'redux-actions';

export const {
  searchRequest,
  searchSuccess,
  searchFailure,
  showsRequest,
  showsSuccess,
  showsFailure
} = createActions({
  
  SEARCH_REQUEST: payload => payload,
  SEARCH_SUCCESS: payload => payload,
  SEARCH_FAILURE: undefined,

  SHOWS_REQUEST: payload => payload,
  SHOWS_SUCCESS: payload => payload,
  SHOWS_FAILURE: undefined,
  
});