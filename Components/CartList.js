import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class CartList extends Component{
  render(){
    return(
      <div>
        <table width="100%">
          <thead>
          <tr>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) =>
              <Item
                {...item}
                key = {index}
                onClick={() => this.props.onItemClick(index)}
                onMinus={() => this.props.onItemMinus(index, item.count, item.price)}
                onPlus={() => this.props.onItemPlus(index, item.count, item.price)}
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
CartList.propTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    count : PropTypes.number.isRequired,
  })).isRequired
}
