import React, { Component } from 'react';
import classes from '../../Card/Card.module.css';
import Header from '../../../components/Header/Header';
import FormBMI from '../../../components/Form/FormBMI/FormBMI'
import Button from '../../../elements/Button/Button'
import Result from '../../../elements/Result/Result'

export class CardBMI extends Component {
  state = {
    weight: '',
    height: '',
    result: ''
  }

  inputHandler = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  startCalc = () => {
    let weight = this.state.weight
    let height = this.state.height
    if (weight && height) {
      let result = Math.floor((weight / height ** 2) * 10000)

      this.setState({
        result
      })
    } else {
      alert('Please put all of the data.')
    }
  }

  render() {
    return (
      <div className={classes.Card} style={{ backgroundColor: 'rgb(80, 126, 80)' }}>
        <Header content='Body Mass Index' color='blanchedalmond' fontSize='30px' />
        <FormBMI
          onChange={this.inputHandler}
        />
        <Button onClick={this.startCalc} />
        <Result result={this.state.result} />
      </div>
    )
  }
}