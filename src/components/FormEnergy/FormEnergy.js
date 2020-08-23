import React, { Component } from 'react';
import classes from './FormEnergy.module.css'
import Input from '../../elements/InputField/InputField'

export const formEnergy = (props) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        type='text'
        label='age'
        name='age'
        placeholder='age'
        value={props.value}
        onChange={props.onChange}>
      </Input>
      <Input
        type='text'
        label='weight'
        name='weight'
        placeholder='weight'
        value={props.value}
        onChange={props.onChange}>
      </Input>
    </div>
  )
}

export default formEnergy;