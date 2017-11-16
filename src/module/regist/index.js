import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Icon } from 'antd';
import { regist } from './actions';

const FormItem = Form.Item;

class Regist extends Component {

  handleRegist = (e) => {
    e.preventDefault();
    const { regist, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      console.log(err, values)
      if (!err) {
        regist(values);
      }
    });
  }

  render() {

    const { loginState, form: { getFieldDecorator } } = this.props;

    if (loginState) {
      return <Redirect to='/' />
    }

    return (
      <div className='member-operation'>
        <Form onSubmit={this.handleRegist}>
          <FormItem label="用户名" hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名',
                  whitespace: true
                }, {
                  max: 16,
                  message: '最多16位'
                }, {
                  pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g,
                  message: '只能使用中文、英文、数字'
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
                  message: '请输入密码',
                  whitespace: true
                }, {
                  max: 16,
                  message: '最多16位'
                }, {
                  pattern: /^[a-zA-Z0-9]+$/g,
                  message: '只能使用英文、数字'
                }
              ]
            })(
              <Input prefix={<Icon type="lock" />} type='password' placeholder='密码' />
              )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className='member-operation__button'>注册</Button>
          </FormItem>
          <Link to='/login'>登录</Link>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginState: state.app.loginState,
    ...state.regist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    regist: bindActionCreators(regist, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Regist));
