import {show} from '../api';
import {actionCreators} from '../actions'


export const showMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === actionCreators.showsRequest.toString()) {
    show(action.payload)
    .then(response => {
      store.dispatch(actionCreators.showsSuccess(response));
    });
  }
  return result;
  
}

