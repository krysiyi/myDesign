import React, { Component } from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

export default class Minelist extends Component {
  render() {
    const {
      text
    } =this.props;
    return (
        <List className="my-list">
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {text[0]}
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {text[1]}
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {text[2]}
            </Item>
        </List>
    )
  }
}
