import React from 'react';

import classes from './Header.module.css';

const header = (props) => {
  return (
    <header className={classes.Header} style={{ fontSize: props.fontSize }}>
      {props.content}
    </header>
  );
}

export default header;