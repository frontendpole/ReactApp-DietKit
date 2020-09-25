import React from 'react';
import classes from './InputField.module.css'

const inputField = ({ name, type, label, placeholder, value, onChange }) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default inputField;