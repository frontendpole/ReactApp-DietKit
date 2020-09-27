import React, { Component } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { CardBMI } from './containers/Card/CardBMI/CardBMI'
import { CardEnergy } from './containers/Card/CardEnergy/CardEnergy'
import { CardWater } from './containers/Card/CardWater/CardWater'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChoiceEnergy from './elements/Choice/ChoiceEnergy/ChoiceEnergy'
import ChoiceBMI from './elements/Choice/ChoiceBMI/ChoiceBMI'
import ChoiceWater from './elements/Choice/ChoiceWater/ChoiceWater'

export class App extends Component {
  render() {
    return (
      <div className={classes.AppWrapper}>
        <Router>
          <Switch>
            <Route exact path='https://frontendpole.github.io/ReactApp-Easy-Diet-App/'>
              <Nav backgroundColor='darkgray' />
              <Header content='choose your calculator' fontSize='40px' />
              <div className={classes.AppMain}>
                <ChoiceEnergy />
                <ChoiceBMI />
                <ChoiceWater />
              </div>
              <Footer />
            </Route>
            <Route path='https://frontendpole.github.io/ReactApp-Easy-Diet-App/EnergyDemandCalculator'>
              <Nav backgroundColor='rgb(211, 117, 117)' />
              <Header content='calculate your daily energy demand' fontSize='40px' />
              <div className={classes.AppMain}>
                <Link className={classes.Back} to='https://frontendpole.github.io/ReactApp-Easy-Diet-App/'>back</Link>
                <CardEnergy />
              </div>
            </Route>
            <Route path='https://frontendpole.github.io/ReactApp-Easy-Diet-App/BMICalculator'>
              <Nav backgroundColor='rgb(80, 126, 80)' />
              <Header content='calculate your body mass index' fontSize='40px' />
              <div className={classes.AppMain}>
                <Link className={classes.Back} to='https://frontendpole.github.io/ReactApp-Easy-Diet-App/'>back</Link>
                <CardBMI />
              </div>
            </Route>
            <Route path='https://frontendpole.github.io/ReactApp-Easy-Diet-App/WaterDemandCalculator'>
              <Nav backgroundColor='cadetblue' />
              <Header content='calculate your daily water demand' fontSize='40px' />
              <div className={classes.AppMain}>
                <Link className={classes.Back} to='https://frontendpole.github.io/ReactApp-Easy-Diet-App/'>back</Link>
                <CardWater />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}