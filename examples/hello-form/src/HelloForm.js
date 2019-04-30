import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'antd'

import {
  InputField,
  CheckboxField,
  RadioButtonField,
  SelectField,
  SliderField,
  SwitchField,
  CheckableTagField,
  TextAreaField,
  InputNumberField,
} from 'antd-redux-form'

class HelloForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  submit = values => {
    if (values) {
      this.setState({ submittedValues: JSON.stringify(values, null, 4) })
    }
  }

  render() {
    const { handleSubmit } = this.props
    const { submittedValues } = this.state

    return (
      <div style={{ margin: 20 }}>
        <h1>{'antd-redux-form'}</h1>

        {submittedValues && (
          <pre
            style={{
              marginBottom: 20,
              background: 'rgba(0, 0, 0, .04)',
              padding: 12,
            }}
          >
            {submittedValues}
          </pre>
        )}

        <Form onSubmit={handleSubmit(this.submit)}>
          <Field
            label="InputField"
            name="InputField"
            component={InputField}
            type="text"
            placeholder="InputField placeholder"
          />

          <Field
            label="RadioButtonField"
            name="RadioButtonField"
            component={RadioButtonField}
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
            ]}
          />

          <Field
            label="SelectField"
            name="SelectField"
            component={SelectField}
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
            ]}
          />

          <Field
            label="SliderField"
            name="SliderField"
            component={SliderField}
            min={1}
            max={100}
            step={0.01}
            marks={{
              0: '0',
              50: '50',
              100: '100',
            }}
          />

          <Field
            label="SwitchField"
            name="SwitchField"
            component={SwitchField}
          />

          <Field
            name="CheckboxField"
            component={CheckboxField}
            wrapperCol={{ xs: 24, sm: { span: 16, offset: 8 } }}
          >
            {'CheckboxField'}
          </Field>

          <Field
            label="CheckableTagField"
            name="CheckableTagField"
            component={CheckableTagField}
            options={[
              { value: 'a', title: 'Option A' },
              { value: 'b', title: 'Option B' },
              { value: 'c', title: 'Option C', disabled: true },
            ]}
          />

          <Field
            label="TextAreaField"
            name="TextAreaField"
            component={TextAreaField}
          />

          <Field
            label="InputNumberField"
            name="InputNumberField"
            component={InputNumberField}
            min={0.3}
            max={300}
            step={0.3}
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button htmlType="submit" type="primary">
              {'Submit Form'}
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.InputField) {
    errors.InputField = 'is required'
  }

  if (!values.RadioButtonField) {
    errors.RadioButtonField = 'is required'
  }

  if (!values.SelectField) {
    errors.SelectField = 'is required'
  }

  if (!values.SliderField) {
    errors.SliderField = 'is required'
  }

  if (!values.SwitchField) {
    errors.SwitchField = 'is required'
  }

  if (!values.CheckboxField) {
    errors.CheckboxField = 'is required'
  }

  if (!values.CheckableTagField) {
    errors.CheckableTagField = 'is required'
  }

  if (!values.TextAreaField) {
    errors.TextAreaField = 'is required'
  }

  if (!values.InputNumberField) {
    errors.InputNumberField = 'is required'
  }

  return errors
}

export default reduxForm({
  form: 'helloForm',
  validate,
})(HelloForm)
