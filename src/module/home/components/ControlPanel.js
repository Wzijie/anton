import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item;

class ControlPanel extends Component {

  handlerSearch = (e) => {
    e.preventDefault();
    const { form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }

  render() {
    const { onCreateModalToggle, form: { getFieldDecorator } } = this.props;
    return (
      <div className="control">
        <Form onSubmit={this.handlerSearch} layout='inline'>
          <FormItem label="id">
            {getFieldDecorator('teamId')(<Input placeholder='id' />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">搜索</Button>
          </FormItem>
          <FormItem>
            <Button onClick={onCreateModalToggle}>创建</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ControlPanel);
