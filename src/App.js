import React, { Component } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { CardBMI } from './containers/CardBMI/CardBMI'
import { CardEnergy } from './containers/CardEnergy/CardEnergy'
import Footer from './components/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Nav />
        <Header content='test headera' />
        <div className={classes.AppMain}>
          <CardBMI />
          <CardEnergy />
        </div>
        <Footer />
      </div>
    );
  }
}


