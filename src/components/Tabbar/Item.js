import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Badge} from 'antd-mobile'
import '../../libs/less/icon.less';

const mapState = (state)=>{
  const count = state.cart.cartlist.reduce((result,item)=>{
    return result+=item.count;
  },0)
  return {count}
}
@withRouter
@connect(mapState)
export default class Item extends Component {

  static getDerivedStateFromProps(props){
    return{
      iconState:props.location.pathname === props.path?true:false
    }
  }

  constructor(props){
    super(props);
    this.state={
      iconState:false
    }
  }

  clickSelfHandle = ()=>{
    //console.log(this.props);
    this.props.history.push(this.props.path);
  }

  shouldComponentUpdate(nextprops,nextstate){
    return nextstate.iconState!==this.state.iconState||this.props.count!==nextprops.count;
  }

  render() {
    const{
      icon,
      text,
      count
    } = this.props;
    //console.log(this.props.count);
    //const iconState = location.pathname === path?true:false;
    return (
      <div className={`enjoy-tabbar-item${this.state.iconState?'-active':''}`} onClick={this.clickSelfHandle}>
          <div className='enjoy-tabbar-item-icon'>
          {
            icon==='cart'? 
            <Badge text={count} overflowCount={99}>
            <i className={`iconfont icon-${icon}-${this.state.iconState?'active':'normal'}`}/>
            </Badge>
            :
            <i className={`iconfont icon-${icon}-${this.state.iconState?'active':'normal'}`}/>
          }
          </div>
          <div className='enjoy-tabbar-item-text'>{text}</div>
      </div>
    )
  }
}
