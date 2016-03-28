import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, plusItem, minusItem } from './actions';
import AddCart from './Components/AddCart';
import CartList from './Components/CartList';

class App extends Component{
  render(){
    const { dispatch, visibleItems} = this.props
    return(
      <div>
        <AddCart onAddItem = {
          item => dispatch(addItem(item))
        }/>
        <CartList
          items = {this.props.visibleItems}
          onItemClick = {
            item => dispatch(deleteItem(item))
          }
          onItemPlus = {
            (index,count,price) => dispatch(plusItem(index,count,price))
          }
          onItemMinus = {
            (index,count,price) => dispatch(minusItem(index,count,price))
          }
        />
      </div>
    )
  }
}

function select(state) {
  return {
    visibleItems: state
  };
}

export default connect(select)(App);
