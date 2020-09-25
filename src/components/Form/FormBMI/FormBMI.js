import React from 'react';
import classes from '../Form.module.css'
import Input from '../../../elements/InputField/InputField'
import PropTypes from 'prop-types';

export const formBMI = ({ value, onChange }) => {
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
      <Input
        label='height'
        type='number'
        name='height'
        placeholder='cm'
        value={value}
        onChange={onChange}>
      </Input>
    </div>
  )
}

export default formBMI;