import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  }
};

const crossAreaOption = ["1", "2", "3", "4", "5", "6"].map((area) => {
  return (
    <Option value={area} key={area}>
      {area}
    </Option>
  );
})

class CreateModal extends Component {

  handlerSubmit = () => {
    const { onCreate, form: { validateFields }, onCreateModalToggle } = this.props;
    validateFields((err, values) => {
      if (!err) {
        onCreate(values);
        onCreateModalToggle();
      }
    });
  }

  render() {

    const { 
      visible, 
      loading,
      onCreateModalToggle, 
      form: { getFieldDecorator } 
    } = this.props;

    return (
      <Modal
        title='创建'
        visible={visible}
        loading={loading}
        onOk={this.handlerSubmit}
        onCancel={onCreateModalToggle}
      >
        <Form>
          <FormItem label="跨区" {...formItemLayout}>
            {getFieldDecorator('crossArea', {
              rules: [
                {
                  required: true,
                  message: '请选择跨区'
                }
              ]
            })(
              <Select placeholder='跨区'>
                {crossAreaOption}
              </Select>
              )}
          </FormItem>
          <FormItem label="标题" {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: '请输入标题'
                }
              ]
            })(
              <Input placeholder='标题' />
              )}
          </FormItem>
          <FormItem label="简介" {...formItemLayout}>
            {getFieldDecorator('descript', {
              rules: [
                {
                  max: 50,
                  message: '最多50个字'
                }
              ]
            })(<TextArea placeholder='简介' />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }

}

export default Form.create()(CreateModal);
