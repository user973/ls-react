import {show} from '../api';
import {
  showsRequest,
  showsSuccess
} from '../actions'


export const showMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === showsRequest.toString()) {
    show(action.payload)
    .then(response => {
      store.dispatch(showsSuccess(response));
    });
  }
  return result;
  
}

