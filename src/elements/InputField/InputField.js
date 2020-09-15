import React from 'react';
import classes from './InputField.module.css'

const inputField = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default inputField;