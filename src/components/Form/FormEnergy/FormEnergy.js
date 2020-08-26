import React, { Component } from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formEnergy = (props) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        type='text'
        name='age'
        placeholder='age'
        value={props.value}
        onChange={props.onChange}>
      </Input>
      <select className={classes.select} name='sex' onChange={props.onChange}>
        <option value="sex">sex</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <Input
        type='text'
        name='weight'
        placeholder='weight'
        value={props.value}
        onChange={props.onChange}>
      </Input>
      <select className={classes.select} name='lifestyle' onChange={props.onChange}>
        <option className={classes.option} value="lifestyle">lifestyle</option>
        <option value="sedentary">sedentary</option>
        <option value="moderate">moderate</option>
        <option value="active">active</option>
      </select>
    </div>
  )
}

export default formEnergy;