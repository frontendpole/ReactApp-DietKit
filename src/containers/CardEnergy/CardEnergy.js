import React, { Component } from 'react';
import classes from './CardEnergy.module.css';
import Header from '../../components/Header/Header';
import FormEnergy from '../../components/FormEnergy/FormEnergy'
import Button from '../../elements/Button/Button'
import Result from '../../elements/Result/Result'

export class CardEnergy extends Component {
  render() {
    return (
      <div className={classes.Card}>
        <Header content='Energy demand calculator' />
        <FormEnergy />
        <Button />
        <Result />
      </div>
    )
  }
}