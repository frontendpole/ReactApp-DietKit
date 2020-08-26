import React, { Component } from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formBMI = (props) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        type='text'
        name='weight'
        placeholder='weight'
        value={props.value}
        onChange={props.onChange}>
      </Input>
      <Input
        type='text'
        name='height'
        placeholder='height'
        value={props.value}
        onChange={props.onChange}>
      </Input>
    </div>
  )
}

export default formBMI;