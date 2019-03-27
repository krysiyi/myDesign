import React, { Component,Fragment } from 'react';

import './mineicon.less';

export default class Person extends Component {
  render() {
    return (
      <Fragment>
          <div className="hp-minepage-person-infor">
            <div className="hp-minepage-person-infor-icon">
              <i className='iconfont icon-message'></i>
            </div>
            <div className="hp-minepage-person-infor-photo">头像</div>
            <div className="hp-minepage-person-infor-username">用户名</div>
          </div>
          <div className="hp-minepage-person-integral">
            <div className="hp-minepage-person-integral-left">
              <div className="hp-minepage-person-integral-left-text">
                <span>0</span>份
                <p>商品消费码</p>
              </div>
              <div className="hp-minepage-person-integral-left-next">
                <span>></span>
              </div>
            </div>
            <div className="hp-minepage-person-integral-right">
              <div className="hp-minepage-person-integral-left-text">
                <span>0</span>份
                <p>PASS 专享通</p>
              </div>
              <div className="hp-minepage-person-integral-left-next">
                <span>></span>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}
