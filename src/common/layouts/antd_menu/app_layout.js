import React, {Component} from 'react';
import {Icon, Layout} from 'antd';
import AppMenu from "./app_menu"
import AppBreadcrumb from "./app_bread_crumb"
import AppHeader from "./app_header"
import {withRouter,Switch,Route} from "react-router";
import {entry_index} from "../../route/app-router"
import Welcome from "../../../business/welcome/index"
import NotFound from "../../../business/error/4xx"
import menuData from "../../mock/menu.json"

const {Content, Footer, Sider, Header} = Layout;

class AppLayOut extends Component {

  render() {
    return <Layout >
      <Header className="header">
        {/* 页面头部区域 */}
        <AppHeader></AppHeader>
      </Header>
      <Layout>
        {/* 菜单栏 */}
        <Sider width={200}>
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
            background: '#fff', 
            // padding: 24, margin: 0, minHeight: 280 
            }}>
            <Switch>
            { menuData.menus.map((route, index)=>{
                  if(route.path){
                   return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={NotFound}
                    />
                  }
                }
              )
            }
            <Route component={Welcome}/>
            </Switch>
          </Content>
          <Footer style={{
            padding: '0',
            textAlign: 'center'
          }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  }
}
const AppLayOutWithRouter = withRouter(AppLayOut)
export default AppLayOut
export {AppLayOutWithRouter}
