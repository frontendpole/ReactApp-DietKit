import React, { Component } from 'react';
import classes from '../../Card/Card.module.css';
import Header from '../../../components/Header/Header';
import FormBMI from '../../../components/Form/FormBMI/FormBMI'
import Button from '../../../elements/Button/Button'
import Result from '../../../elements/Result/Result'

export class CardBMI extends Component {
  state = {
    weight: null,
    height: null,
    result: ''
  }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  calculateBMI = () => {
    let weight = this.state.weight;
    let height = this.state.height;
    console.log(typeof weight)
    console.log(typeof height)
    if (weight && height) {
      let result = Math.floor((weight / height ** 2) * 10000);
      this.setState({
        result
      })
    } else {
      alert('All inputs must be filled.');
    }
  }

  render() {
    return (
      <div className={classes.Card} style={{ backgroundColor: 'rgb(80, 126, 80)' }}>
        <Header content='Body Mass Index' color='blanchedalmond' fontSize='30px' />
        <FormBMI
          onChange={this.handleInput}
        />
        <Button onClick={this.calculateBMI} />
        <Result result={this.state.result} />
      </div>
    )
  }
}