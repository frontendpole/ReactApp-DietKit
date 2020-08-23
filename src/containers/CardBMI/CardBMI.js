import React, { Component } from 'react';
import classes from './CardBMI.module.css';
import Header from '../../components/Header/Header';
import FormBMI from '../../components/FormBMI/FormBMI'
import Button from '../../elements/Button/Button'
import Result from '../../elements/Result/Result'

export class CardBMI extends Component {
  render() {
    return (
      <div className={classes.Card}>
        <Header content='BMI calculator' />
        <FormBMI />
        <Button />
        <Result />
      </div>
    )
  }
}