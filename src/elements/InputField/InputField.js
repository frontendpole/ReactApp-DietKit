import React from 'react';
import classes from './InputField.module.css'

const inputField = (props) => {
  return (
    <input className={classes.InputField}
      type={props.type}
      label={props.label}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default inputField;