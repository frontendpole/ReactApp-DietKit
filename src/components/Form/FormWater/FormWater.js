import React from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formWater = ({ value, onChange }) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        label='weight'
        type='number'
        name='weight'
        placeholder='kg'
        value={value}
        onChange={onChange}>
      </Input>
      <label htmlFor="training">training</label>
      <select className={classes.select} name='training' onChange={onChange}>
        <option className={classes.option} value="---">---</option>
        <option value="no training day">no training day</option>
        <option value="mild training day">mild training day</option>
        <option value="moderate training day">moderate training day</option>
        <option value="hard training day">hard training day</option>
      </select>
    </div>
  )
}

export default formWater;