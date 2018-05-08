// @flow
import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const InputField = (field: Object) => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const handleChange = event => {
    if (field.onValueChange) {
      field.onValueChange(event)
    }

    if (field.input.onChange) {
      field.input.onChange(event)
    }

    if (field.onChange) {
      field.onChange(event)
    }
  }

  const labelCol = field.labelCol || { xs: { span: 24 }, sm: { span: 8 } }
  const wrapperCol = field.wrapperCol || { xs: { span: 24 }, sm: { span: 16 } }

  return (
    <FormItem
      colon={field.colon}
      extra={field.extra}
      hasFeedback={field.hasFeedback}
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      labelCol={labelCol}
      required={field.required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={wrapperCol}
    >
      <Input
        {...field.input}
        addonAfter={field.addonAfter}
        addonBefore={field.addonBefore}
        defaultValue={field.defaultValue}
        disabled={field.disabled}
        id={field.id}
        prefix={field.prefix}
        size={field.size}
        suffix={field.suffix}
        onChange={handleChange}
        placeholder={field.placeholder}
        onPressEnter={field.onPressEnter}
      />
    </FormItem>
  )
}

export default InputField