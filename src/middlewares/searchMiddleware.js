import {search} from '../api';
import {
  searchRequest,
  searchSuccess
} from '../actions'


export const searchMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === searchRequest.toString()) {
    search(action.payload)
    .then(response => {
      store.dispatch(searchSuccess(response));
    });
  }
  return result;
  
}

