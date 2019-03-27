import React, { Component } from 'react'
import {connect} from 'react-redux';
import './recommend.less'

@connect(null,{})
export default class Index extends Component {

  componentDidMount(){
    //console.log(this.props);
  }

  render() {
    return (
      <div className='recommend'>

      </div>
    )
  }
}

