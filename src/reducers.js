import {combineReducers} from 'redux';
import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from './actions/marketActions';
import {MOVE_ORDER_TO_CUSTOMER} from './actions/farmActions';

export const marketInitState = { orders: [] };

export const market = (state = marketInitState, action) => {

  switch(action.type) {

    case CREATE_ORDER:
      return {...state, orders: state.orders.concat(action.payload)};
    
    case MOVE_ORDER_TO_FARM:
      return {...state, orders: state.orders.filter((item) => item.id !== action.payload.id)};

    default:
      return state;
  }

};

export const farmInitState = { orders: [] };

export const farm = (state = farmInitState, action) => {
  
  switch(action.type) {

    case MOVE_ORDER_TO_FARM:
      return  {...state, orders: state.orders.concat(action.payload)};

    case MOVE_ORDER_TO_CUSTOMER:
      return {...state, orders: state.orders.filter((item) => item.id !== action.payload.id)};
    
    default:
      return state;
  }

};

export const budgetInitState = { profit: 0, marketExpanse: 0, farmExpanse: 0, deliveryExpanse: 0 };

export const budget = (state = budgetInitState, action) => {
  
  switch(action.type) {

    case CREATE_ORDER:
      return {...state, profit: state.profit + action.payload.price, marketExpanse: state.marketExpanse + 20};

    case MOVE_ORDER_TO_FARM:
      return  {...state, farmExpanse: state.farmExpanse + 100};

    case MOVE_ORDER_TO_CUSTOMER:
      return {...state, deliveryExpanse: state.deliveryExpanse + 20};
    
    default:
      return state;
  }

};

export const rootReducer = combineReducers({
  market,
  farm,
  budget
});

export const getMarket = state => state.market;
export const getFarm = state => state.farm;
export const getBudget = state => state.budget;