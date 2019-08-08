import React, {Component} from 'react';
import {Avatar , Menu, Layout,Icon} from 'antd';
import {Route, withRouter, Switch} from "react-router";
import { connect } from 'react-redux'

const {Content, Footer, Sider, Header} = Layout;

class AppHeader extends Component {
  constructor(props) {
    super(props)
  }
  
  logout=()=>{
    this.props.history.push("/")
  }
  
  render() {
    return <React.Fragment>
        <Layout style={{
          background: '#001529'
        }}>
        <Sider width={200}>
          <div className="logo">111111</div>
        </Sider>
        <Content>main content</Content>
        <Sider style={{"text-align":'right'}}>
           {/* <Icon type="wallet" theme="#87d068" /> */}
          <Avatar  style={{ backgroundColor: '#87d068' ,"margin-right":4}} icon="user" />
          <Avatar onClick={this.logout}  className="anticon anticon-sync" style={{ backgroundColor: '#87d068' }} icon="logout" />
        </Sider>
      </Layout>
    </React.Fragment>
  }
}
export default withRouter(AppHeader)