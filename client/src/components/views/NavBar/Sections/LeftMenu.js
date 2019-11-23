import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="blog">
      <a href="/upload">Upload</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu