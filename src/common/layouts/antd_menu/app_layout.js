import React, {Component} from 'react';
import {Icon, Layout} from 'antd';
import {Route, withRouter, Switch} from "react-router";
import AppMenu from "./app_menu"
import AppBreadcrumb from "./app_bread_crumb"
import AppHeader from "./app_header"
import routerCfgs,{welcomePage, notFoundPage} from "../../route/app-router"
import getMenus from "../../mock/menu.js"

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
            /* padding: 24, margin: 0,   minHeight: 480 ,*/
          
            background: '#fff'
          }}>
            <Switch>
              {console.log(routerCfgs)}
              {getMenus().map((menuRoute, index) => {
                  if (menuRoute.path) {
                    const componet = routerCfgs.find(routeCfg => {
                      return routeCfg.path == menuRoute.path;
                    })
                    const menuComponet = (componet && componet.componet) ? componet.componet : notFoundPage;
                    // 菜单会记录绝对路径，所以不需要prefix props.match.path
                    const path=this.props.match.path+menuRoute.path;
                    return <Route key={path} path={path} exact={false} component={menuComponet} />
                  }
                })
              }
              <Route component={welcomePage} />
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
