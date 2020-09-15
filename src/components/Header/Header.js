import React from 'react';

import classes from './Header.module.css';

const header = ({ fontSize, color, content }) => {
  return (
    <header className={classes.Header} style={{ fontSize: fontSize, color: color }}>
      {content}
    </header>
  );
}

export default header;