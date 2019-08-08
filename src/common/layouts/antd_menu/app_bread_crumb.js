import React, {Component} from 'react';
import {Breadcrumb, Icon, Layout, Menu} from 'antd';

class AppBreadcrumb extends Component {
  render() {
    return <Breadcrumb style={{
      margin: '4px 0'
    }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  }
}
export default AppBreadcrumb