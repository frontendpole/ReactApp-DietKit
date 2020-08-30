import React, { Component } from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formWater = (props) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        type='text'
        name='weight'
        placeholder='weight'
        value={props.value}
        onChange={props.onChange}>
      </Input>
      <select className={classes.select} name='training' onChange={props.onChange}>
        <option className={classes.option} value="training">training</option>
        <option value="no training day">no training day</option>
        <option value="mild training day">mild training day</option>
        <option value="moderate training day">moderate training day</option>
        <option value="hard training day">hard training day</option>
      </select>
    </div>
  )
}

export default formWater;