import React, { Component ,Fragment} from 'react';

import './mineicon.less';

const orderList=[
    {
        icon:'daishiyong',
        text:'未使用'
    },{
        icon:'daifahuo',
        text:'代发货'
    },{
        icon:'daishouhuo',
        text:'待收货'
    },{
        icon:'daifankui',
        text:'待反馈'
    },{
        icon:'tuikuan',
        text:'退款'
    }
]
export default class Order extends Component {
  render() {
    return (
      <Fragment>
        <div className="hp-minepage-order-title">
            我的订单
            <span>查看全部订单 ></span>  
        </div>
        <div className="hp-minepage-order-items">
            {
                orderList.map(item=>{
                    return (
                        <div className="hp-minepage-order-items-item" key={item.icon}>
                            <i className={`iconfont icon-${item.icon}`}></i><br/>
                            <span>{item.text}</span>
                        </div>
                    )
                })
            }
        </div>

      </Fragment>
    )
  }
}
