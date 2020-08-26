import React from 'react';
import classes from './InputField.module.css'

const inputField = (props) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default inputField;