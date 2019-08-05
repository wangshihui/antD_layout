import React, {Component} from 'react';
import { Icon, Layout, Menu} from 'antd';
import menuData from "../../mock/menu.json"
import {withRouter} from "react-router-dom";
import "./app_layout.css"
const {SubMenu} = Menu;

/**
 *  创建subMenu 需要父组件提供属性支持,将父组件的所有属性传入,所以这个模式不好，eventKey影响菜单的激活效果
 */
class CreateSubMenu extends Component {
  render() {
    console.log(this.props);
    const {
      menus,root,eventKey,...others
    } = this.props;
    return menus.map((menu,i) => {
      if (menu.parent == root) {
        return <SubMenu key={menu.id} {...others} eventKey={eventKey+i} title={<span> <Icon type="user" />
          {menu.name} </span>}></SubMenu>
      }
    })
  }
}


function creatMenuIteam(menus, root) {}

class AppMenu extends Component {
  onClick=function({ item, key, keyPath, domEvent }){
    this.props.history.push(item.props.path)
  }
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this);
  }
  
  checkChildMenu=function(menus,menu){
    return menus.filter(m=>m.parent==menu.id).length>0;
  }
  
  createSubMenuOrIteam =function(menus,rootId){
    return menus.map((menu,i) => {
      console.log(menu.parent == rootId)
      if (menu.parent == rootId && this.checkChildMenu(menus,menu)) {
        return <Menu.ItemGroup key={menu.id}  title={ <span> <Icon type="user" />{menu.name} </span>} >
          {this.createSubMenuOrIteam(menus,menu.id)}
        </Menu.ItemGroup>
        
      }else if(menu.parent == rootId){
        return <Menu.Item key={menu.id} path={menu.path} >{menu.name}</Menu.Item>
      }
    })
  } 

  render() {
    const {menus, welcome,rootId} = menuData;
    return <Menu mode="inline" style={{
      borderRight: 0,
      height: '100%'
    }} onClick={this.onClick}>
    {this.createSubMenuOrIteam(menus,rootId)}
    </Menu>
  }
}
export default withRouter(AppMenu)