import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Search} from '../../components'
import './index.less'

@connect(null,{})
export default class Index extends Component {

  componentDidMount(){
    //console.log(this.props);
  }

  handleToBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className='searchp'>
        <section className='head'>
        <div className='searchbox'>
          <Search />
        </div>
        <div className='cancel' onClick={this.handleToBack}>取消</div>
        </section>
        <section className='history'>
          <div className='title'>
          <span>最近搜索</span>
          <i className='iconfont icon-heart'></i>
          </div>
          <div className='tags'>
            <div className='tag'>hhhhhhh</div>
            <div className='tag'>测试</div>
            <div className='tag'>我</div>
            <div className='tag'>权力的游戏</div>
            <div className='tag'>某幻君</div>
          </div>
        </section>
      </div>
    )
  }
}

