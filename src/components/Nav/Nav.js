import React from 'react';
import classes from './Nav.module.css';
import {
  Link
} from "react-router-dom";

const nav = ({ backgroundColor }) => {
  return (
    <nav className={classes.Nav} style={{ backgroundColor: backgroundColor }}>
      <Link className={classes.Logo} to='/'>EASY DIET</Link>
    </nav>
  );
}

export default nav;