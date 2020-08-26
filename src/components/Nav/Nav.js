import React from 'react';

import classes from './Nav.module.css';

const nav = (props) => {
  return (
    <nav className={classes.Nav}>
      <a className={classes.Logo} href="#">EASY DIET</a>
    </nav>
  );
}

export default nav;