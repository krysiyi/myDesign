import React, { Component,Fragment} from 'react';
import {
  List,
  InputItem,
  Button,
  Toast
} from 'antd-mobile';
import { connect } from 'react-redux';

import { toggleLoginStatus } from '../../../actions/pageaction'
import { login } from '../../../services';
import './login.less';

@connect(null,{ toggleLoginStatus })
export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:{
        'value':'',
        'error':false,
        'errMsg':'用户名输入4-8位'
      },
      password:{
        'value':'',
        'error':false,
        'errMsg':'密码输入6-16位'
      }
    }
  }
  handleChangeUsername=(e)=>{
    let error = false ;
    if( e.length < 4 || e.length > 8)
      error =true;
    this.setState({
      username:{
        ...this.state.username,
        'value':e,
        error
      }
    })
  }
  handleChangePassword=(e)=>{
    let error = false ;
    if( e.length < 6 || e.length > 16)
      error =true;
    this.setState({
      password:{
        ...this.state.password,
        value:e,
        error
      }
    })
  }
  handleLogin=()=>{
    if(this.state.username.value === '' || this.state.password.value === '')
      return Toast.fail("用户名或密码不能为空！");
    if(this.state.username.error === true || this.state.password.error === true)
      return Toast.fail("用户名或密码输入有误！");
    login({
      username:this.state.username,
      password:this.state.password
    })
    .then((resp)=>{
      if(resp.status === 200 && resp.statusText === 'OK'){
        if(resp.data.data.err === true ){
          Toast.success("登录成功！");
          window.localStorage.setItem('hot-pot',resp.data.data.token);

          this.props.toggleLoginStatus(true)
        }else{
          Toast.fail("登录失败，请重新登录！")
        }
      }else{
        Toast.fail("登录失败，请重新登录！")
        }
      }
    )
    .catch((err)=>{
      console.log(err);
    }

    )
  }
  render() {
    return (
      <Fragment>
        <div className="hp-login-title">
          使用账号登录ENJOY
        </div>
        <div className="hp-login-form">
          <List >
            <InputItem
              placeholder="请输入账号"
              value={this.state.username.value}
              onChange={this.handleChangeUsername}
              error={this.state.username.error}
              onErrorClick={()=>{
                Toast.fail(this.state.username.errMsg)
              }
            }
            />
            <InputItem
              placeholder="请输入密码"
              type='password'
              value={this.state.password.value}
              onChange={this.handleChangePassword}
              error={this.state.password.error}
              onErrorClick={()=>{
                Toast.fail(this.state.password.errMsg)
              }}
            />
             </List>
            <a className='hp-login-form-forget-pwd'>忘记密码?</a>
            <Button onClick={this.handleLogin}>登录</Button>
         
        </div>
      </Fragment>
    )
  }
}
