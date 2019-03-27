import React, { Component ,Fragment} from 'react'
import  Person from './Person';
import Order from './Order';
import Minelist from './Minelist';
import {toggleLoginStatus} from '../../../actions/pageaction';
import {connect} from 'react-redux';

import './index.less';
import { Button } from 'antd-mobile';

const options=[
  {
    id:'option1',
    text:['邀请好友','我的礼券','我喜欢的商品']
  },
  {
    id:'option2',
    text:['设置','用户协议','联系我们']
  }
]

@connect(null,{toggleLoginStatus})
export default class MinePage extends Component {
  logout=()=>{
    window.localStorage.removeItem('hot-pot');
    this.props.toggleLoginStatus(false);
  }
  render() {
    return (
      <Fragment>
        <div className="hp-minepage-person">
          <Person />
        </div>
        <div className="hp-minepage-order">
          <Order />
        </div>
        {
          options.map(item=>{
            return (
              <div className="hp-minepage-options" key={item.id}>
                <Minelist text={item.text}/>
              </div>
            )
          })
        }
      <Button onClick={this.logout}>退出登录</Button>
      </Fragment>
    )
  }
}
