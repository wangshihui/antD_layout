import React, {Component} from 'react';
import {Button, Checkbox, Form, Icon, Input} from 'antd';

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    const languageCfg = this.props.languageCfg[this.props.language];
    const {maxWidth} = this.props
    const formMaxWidth = "max-width:".concat(maxWidth)
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{
        'max-width': maxWidth
      }}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                message: languageCfg.userNameMsg,
                required: true
              }
            ]
          })(
            <Input prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder={languageCfg.userName} />,)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                message: languageCfg.passwordMsg, // languageCfg.passwordMsg
                required: true
              }
            ]
          })(
            <Input prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder={languageCfg.passwordName} />,)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            initialValue: true,
            valuePropName: 'checked'
          })(
            <Checkbox>{languageCfg.rememberMeMsg}</Checkbox>
          )}
          <a className="login-form-forgot" href="" style={{
            float: 'right'
          }}>
            {languageCfg.pwdForgotLink}
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{
            width: '100%'
          }}>
            {languageCfg.loginButtonMsg}
          </Button>
          {languageCfg.orMsg}
          <a href="">{languageCfg.registerLink}
          </a>
        </Form.Item>
      </Form>
    );
  }
}

NormalLoginForm.defaultProps = {
  language: "zh",
  languageCfg: {
    us: {
      loginButtonMsg: "Log in",
      orMsg: "or",
      passwordMsg: "Please input your Password!",
      passwordName: "password",
      pwdForgotLink: "Forgot password",
      registerLink: "register now!",
      rememberMeMsg: "Remember me",
      userName: "UserName",
      userNameMsg: "Please input your userName!!"
    },
    zh: {
      loginButtonMsg: "登录",
      orMsg: "或者",
      passwordMsg: "请输入密码！",
      passwordName: "密码",
      pwdForgotLink: "忘记密码",
      registerLink: "立即注册",
      rememberMeMsg: "保持我的登录状态",
      userName: "用户名",
      userNameMsg: "请输入用户名!"
    }
  },
  maxWidth: "300px"
}
const LoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export {LoginForm}
export default LoginForm
