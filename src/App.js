import React, { Component } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { CardBMI } from './containers/Card/CardBMI/CardBMI'
import { CardEnergy } from './containers/Card/CardEnergy/CardEnergy'
import { CardWater } from './containers/Card/CardWater/CardWater'
import Footer from './components/Footer/Footer'

export class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Nav />
        <Header content='your diet calculation made easy' fontSize='40px' />
        <div className={classes.AppMain}>
          <CardEnergy />
          <CardBMI />
          <CardWater />
        </div>
        <Footer />
      </div>
    );
  }
}


