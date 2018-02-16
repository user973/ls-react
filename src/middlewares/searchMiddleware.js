import {search} from '../api';
import {actionCreators} from '../actions'


export const searchMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === actionCreators.searchRequest.toString()) {
    search(action.payload)
    .then(response => {
      store.dispatch(actionCreators.searchSuccess(response));
    });
  }
  return result;
  
}

