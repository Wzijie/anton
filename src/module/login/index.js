import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Icon } from 'antd';
import { login } from './actions';
import './index.less';

const FormItem = Form.Item;

class Login extends Component {

  handleLogin = (e) => {
    e.preventDefault();
    const { login, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        login(values);
      }
    });
  }

  render() {

    const { loginState, loginLoading, form: { getFieldDecorator } } = this.props;

    if (loginState) {
      return <Redirect to='/' />
    }

    return (
      <div className='member-operation'>
        <Form onSubmit={this.handleLogin}>
          <FormItem label="用户名" hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名'
                }
              ]
            })(
              <Input prefix={<Icon type="user" />} placeholder='用户名' />
            )}
          </FormItem>
          <FormItem label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码'
                }
              ]
            })(
              <Input prefix={<Icon type="lock" />} type='password' placeholder='密码' />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className='member-operation__button' loading={loginLoading}>登录</Button>
          </FormItem>
          <Link to='/regist'>注册</Link>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.app.loginState,
    ...state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
