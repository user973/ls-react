export const CREATE_ORDER = 'CREATE_ORDER';
export const MOVE_ORDER_TO_FARM = 'MOVE_ORDER_TO_FARM';

export const createOrder = (payload) => ({ type: 'CREATE_ORDER', payload })

export const moveOrderToFarm = (payload) => ({ type: 'MOVE_ORDER_TO_FARM', payload })