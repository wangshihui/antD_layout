import React, {Component} from 'react';
import {Breadcrumb, Icon, Layout, Menu,Divider} from 'antd';
import "./app_layout.css"
import menuData from "../../mock/menu.json"
import {withRouter, Link} from "react-router-dom";

const {SubMenu} = Menu;
const {Content, Sider, Header} = Layout;

/**
 *  创建subMenu 需要父组件提供属性支持,所以这个模式不好，eventKey影响菜单的激活效果
 */
class CreateSubMenu extends Component {
  render() {
    console.log(this.props);
    const {
      menus,root,eventKey,...others
    } = this.props;
    return menus.map((menu,i) => {
      if (menu.parent == root) {
        console.log(menu)
       
        return <SubMenu key={menu.id} {...others} eventKey={eventKey+i} title={<span> <Icon type="user" />
          {menu.name} </span>}></SubMenu>
      }
    })
  }
}


function creatMenuIteam(menus, root) {}

class AppMenu extends Component {
  
  checkChildMenu=function(menus,menu){
    return menus.filter(m=>m.parent==menu.id).length>0;
  }

  createSubMenuOrIteam =function(menus,rootPath){
    return menus.map((menu,i) => {
      console.log(menu.parent == rootPath)
      if (menu.parent == rootPath && this.checkChildMenu(menus,menu)) {
        return <Menu.ItemGroup key={menu.id}  title={ <span> <Icon type="user" />{menu.name} </span>} >
          {this.createSubMenuOrIteam(menus,menu.id)}
        </Menu.ItemGroup>
        
      }else if(menu.parent == rootPath){
        return <Menu.Item key={menu.id} title="1111111">{menu.name}</Menu.Item>
      }
    })
  } 

  render() {
    const {menus, welcome,rootPath} = menuData;
    return <Menu mode="inline" style={{
      borderRight: 0,
      height: '100%'
    }}>
    {this.createSubMenuOrIteam(menus,rootPath)}
    </Menu>
  }
}
export default AppMenu