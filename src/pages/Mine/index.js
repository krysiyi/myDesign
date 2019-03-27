import React, { Component } from 'react'

import {connect} from 'react-redux';
import {changePageTitle} from '../../actions/pageaction';
import Login from './Login';
import MinePage from './MinePage';

const mapState=(state)=>{
  return {
    islogin:state.page.isLogin
  }
}

@connect(mapState,{changePageTitle})
export default class Mine extends Component {
  
  componentDidMount(){
    //console.log(this.props);
    this.props.changePageTitle('我的');
  }

  render() {
    return (
      <div className='hp-mine-wrapper'>
        {this.props.islogin
        ?
        <MinePage /> 
        :
        <Login />}
      </div>
    )
  }
}
