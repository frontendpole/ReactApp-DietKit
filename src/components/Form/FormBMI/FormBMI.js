import React from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'

export const formBMI = ({ value, onChange }) => {
  return (
    <div className={classes.FormWrapper}>
      <Input
        type='text'
        name='weight'
        placeholder='weight'
        value={value}
        onChange={onChange}>
      </Input>
      <Input
        type='text'
        name='height'
        placeholder='height'
        value={value}
        onChange={onChange}>
      </Input>
    </div>
  )
}

export default formBMI;