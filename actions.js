export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const CHANGE_ITEM = {
  INCREASE_NUM : 'INCREASE_NUM',
  DECREASE_NUM : 'DECREASE_NUM'
}

export function addItem(item){
  return { type : ADD_ITEM, item }
}

export function deleteItem(index){
  return { type : DELETE_ITEM, index }
}

export function plusItem(index,count,price){
  return { type : CHANGE_ITEM.INCREASE_NUM, index, count, price }
}

export function minusItem(index,count,price){
  return { type : CHANGE_ITEM.DECREASE_NUM, index, count, price }
}
