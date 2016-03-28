import React, { Component, PropTypes } from 'react';

export default class Item extends Component{
  handleMinus(cls){
    if (cls.indexOf('no') > 0) {
      return false;
    }
    this.props.onMinus();
  }
  render(){
    var minus = this.props.count > 1 ? 'J_Minus' : 'J_Minus no'
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td width="240">
          <div className="item-amount">
            <a href="javascript:;" className={minus} onClick={cls => this.handleMinus(minus)}>-</a>
            <span className="text-amount">{this.props.count}</span>
            <a href="javascript:;" className="J_Plus" onClick={this.props.onPlus}>+</a>
          </div>
        </td>
        <td>{this.props.sum}</td>
        <td><a href="javascript:;" onClick={this.props.onClick}>删除</a></td>
      </tr>
    )
  }
}
