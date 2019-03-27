import React, { Component } from 'react'
import  PropTypes from 'prop-types';
import './search.less';

export default class Index extends Component {
  static proptypes = {
    disabled: PropTypes.bool,
    fn: PropTypes.func
  }

  hanldeClick = () => {
    if(this.props.disabled){
      this.props.fn()
    }
  }

  render() {
    const {disabled} = this.props
    return (
        <div className='search' onClick={this.hanldeClick}>
            <i className='iconfont icon-search'></i>
            <input className='input' ype='text' disabled={disabled} placeholder='请输入搜索内容(=・ω・=)' />
        </div>
    )
  }
}
