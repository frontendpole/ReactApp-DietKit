import React from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formEnergy = ({ value, onChange }) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        label='age'
        type='number'
        name='age'
        placeholder='years'
        value={value}
        onChange={onChange}>
      </Input>
      <label htmlFor="sex">sex</label>
      <select className={classes.select} name='sex' onChange={onChange}>
        <option value="---">---</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <Input
        label='weight'
        type='number'
        name='weight'
        placeholder='kg'
        value={value}
        onChange={onChange}>
      </Input>
      <label htmlFor="lifestyle">lifestyle</label>
      <select className={classes.select} name='lifestyle' onChange={onChange}>
        <option className={classes.option} value="---">---</option>
        <option value="sedentary">sedentary</option>
        <option value="moderate">moderate</option>
        <option value="active">active</option>
      </select>
    </div>
  )
}

export default formEnergy;