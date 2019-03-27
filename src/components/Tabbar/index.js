import React, { Component } from 'react'
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './Item';
import './tabbar.less';

const mapSate=(state)=>{
  return {
    isSubpage:state.page.isSubpage
  };
}
@connect(mapSate)
export default class Tabbar extends Component {
  static proptypes = {
    routes:PropTypes.arrayOf(PropTypes.shape(
      {
        path:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired,
      }
    )).isRequired
  }
  render() {
    return (
        this.props.isSubpage === true
        ?
        null
        :
        <div className='enjoy-tabbar'>
            {this.props.routes.map(route=>
                <Item 
                key={route.path} 
                path={route.path} 
                text={route.text} 
                icon={route.icon}/>
            )}
        </div>
    )
  }
}
