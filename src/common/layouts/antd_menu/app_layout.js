import React, {Component} from 'react';
import {Icon, Layout} from 'antd';
import AppMenu from "./app_menu"
import AppBreadcrumb from "./app_bread_crumb"
import AppHeader from "./app_header"
const {Content, Sider, Header} = Layout;

class AppLayOut extends Component {

  render() {
    return <Layout>
      <Header className="header">
        {/* 页面头部区域 */}
        <AppHeader></AppHeader>
      </Header>
      <Layout>
        {/* 菜单栏 */}
        <Sider width={200} >
          <AppMenu></AppMenu>
        </Sider>
        {/* 内容布局 */}
        <Layout style={{
          padding: '0 24px 24px'
        }}>
          {/* 面包屑导航 */}
          <AppBreadcrumb></AppBreadcrumb>
          {/* 内容展示区域 */}
          <Content style={{
            margin: 0,
            minHeight: 280,
            padding: 24
          }}>
            Content11111111111111
          </Content>
        </Layout>
      </Layout>
    </Layout>
  }
}

export default AppLayOut