import { combineReducers } from 'redux';
import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM } from './actions';

export function items(state = [], action){
  switch(action.type){
    case ADD_ITEM:
      return [ ...state, {
        name : action.item.name,
        price : action.item.price,
        count : action.item.count,
        sum : action.item.price * action.item.count
      }];
    case DELETE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case CHANGE_ITEM.INCREASE_NUM:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          count : ++action.count,
          sum : action.count * action.price
        }),
        ...state.slice(action.index + 1)
      ];
    case CHANGE_ITEM.DECREASE_NUM:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          count : --action.count,
          sum : action.count * action.price
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
