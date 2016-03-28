import React, { Component, PropTypes } from 'react';

export default class AddCart extends Component{
  render(){
    return(
      <div>
        <label htmlFor="">商品名称：</label>
        <input type="text" ref="name" />
        <label htmlFor="">商品价格：</label>
        <input type="text" ref="price" />
        <label htmlFor="">商品数量：</label>
        <input type="text" ref="count" />
        <button onClick = {e => this.handleClick(e)}>添加商品</button>
      </div>
    )
  }

  handleClick(e){
    const name = this.refs.name;
    const name_value = name.value.trim();
    const price = this.refs.price;
    const price_value = parseInt(price.value.trim());
    const count = this.refs.count;
    const count_value = parseInt(count.value.trim());
    this.props.onAddItem({name : name_value, price : price_value, count : count_value});
    name.value = '';
    price.value = '';
    count.value = '';
  }
}
AddCart.propTypes = {
  onAddItem : PropTypes.func.isRequired
}
