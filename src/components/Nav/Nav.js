import React from 'react';

import classes from './Nav.module.css';

const nav = (props) => {
  return (
    <header className={classes.Header} style={{ fontSize: props.fontSize }}>
      {props.content}
    </header>
  );
}

export default nav;