import React from 'react';
import classes from './Footer.module.css'

const footer = ({backgroundColor}) => {
  return (
    <footer className={classes.Footer} style={{ backgroundColor: backgroundColor }}>by AK</footer>
  );
}

export default footer;