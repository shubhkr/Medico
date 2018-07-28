import React from 'react';
import { Form, Input, Tooltip, notification, Radio, Icon, DatePicker, TimePicker, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
var Recaptcha = require('react-recaptcha');
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const { TextArea } = Input;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AutoCompleteOption = AutoComplete.Option;
import Utils from '../../utils/AppUtil';
import AppConfig from '../../config/AppConfig'
var moment = require('moment');

const residences = [{
  value: 'tinsukia',
  label: 'Tinsukia',
  children: [{
    value: 'panitola',
    label: 'Panitola',
    children: [{
      value: 'panitola post office',
      label: 'Panitola Post Office',
    }],
  },{
    value: 'dumduma',
    label: 'Dumduma',
    children: [{
      value: 'gandhi chowk',
      label: 'Gandhi Chowk',
    }],
  },{
    value: 'tinsukia local',
    label: 'Tinsukia Local',
  }],
}];

const openNotificationWithIcon = (type) => {
  if (type === 'success') {
    notification[type]({
      message: 'Appointment Confirmed',
      description: 'Thank you for the booking. Someone from our office will be in touch with you very soon.',
    });
  } else if(type === 'error') {
    notification[type]({
      message: 'Appointment Booking Failed',
      description: 'Something bad happend!! Please reload the page and try again.',
    });
  }
};

class RegistrationForm extends React.Component {
  state = {
    checked: false,
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false,
    iconLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // Should format date value before submit.
        const rangeValue = values['range-picker'];
        const rangeTimeValue = values['range-time-picker'];
        const value = {
          ...values,
          'dob': values['dob'].format('YYYY-MM-DD'),
          'appointmentTime': values['appointmentTime'].format('YYYY-MM-DD HH:mm:ss'),
        }
        Utils.request({
          url: AppConfig.config.postFormDataUrl,
          method: 'POST',
          body: value,
          callback: this.onFormDataPostComplete
        });
      } else {
        this.setState({
          loading: false
        })
      }
    });
  };

  onFormDataPostComplete = (err, res) => {
    this.setState({
      loading: false
    })
    if (err) {
      openNotificationWithIcon('error')
    } else {
      $('.form-submit-button').attr('disabled', true)
      openNotificationWithIcon('success')
    }
  }

  googleResponseCallback = (res) => {
    $('.ant-checkbox-input').click()
  };

  enterLoading = () => {
    this.setState({ loading: true });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="0">+0</Option>
      </Select>
    );

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    window.googleResponseCallback = this.googleResponseCallback;

    return (
      <div className="n-appointment-form">
        <Form className="n-registration-form" onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                First Name&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Please input your First name!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Last Name&nbsp;
              </span>
            )}
          >
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Please input your Last name!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Date of Birth"
          >
            {getFieldDecorator('dob', config)(
              <DatePicker />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Habitual Residence"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
            })(
              <Cascader options={residences} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                Appointment Time&nbsp;
                <Tooltip title="Please select a proper date and time for your appointment.">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('appointmentTime', config)(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Reason for your visit"
            hasFeedback
          >
            {getFieldDecorator('reasonOfVisit', {
              rules: [
                { required: true, message: 'Please select your reason!' },
              ],
            })(
              <Select placeholder="Please select a reason for your upcoming visit">
                <Option value="exam_n_clean">Examination & Cleaning</Option>
                <Option value="exam">Examination Only</Option>
                <Option value="clean">Cleaning Only</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Notes for the doctor"
            hasFeedback
          >
            {getFieldDecorator('notesForDoctor', {
              rules: [{
                required: false,
                message: 'Please add notes for the doctor.'
              }],
            })(
              <TextArea placeholder="You can add any notes for the doctor here.
              e.g. I am sensitive to this particular medicine."/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Captcha"
          >
            {getFieldDecorator('input', {
              rules: [{ required: true, message: 'Please input the captcha you got!' }],
            })(
            <div>
              <Checkbox className="hidden"></Checkbox>
              <div className="g-recaptcha" data-sitekey="6LdVzmIUAAAAAJCgqfrdJTH9kiWfMHFZcyAiCYOb" data-callback="googleResponseCallback"></div>
            </div>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" className="form-submit-button" onClick={this.enterLoading} loading={this.state.loading} htmlType="submit">Make an appointment</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(RegistrationForm);
