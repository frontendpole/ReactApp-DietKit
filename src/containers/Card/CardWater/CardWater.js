import React, { Component } from 'react';
import classes from '../../Card/Card.module.css';
import Header from '../../../components/Header/Header';
import FormWater from '../../../components/Form/FormWater/FormWater'
import Button from '../../../elements/Button/Button'
import Result from '../../../elements/Result/Result'

export class CardWater extends Component {
  state = {
    weight: '',
    training: '---',
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

  startCalc = () => {
    let weight = this.state.weight
    let training = this.state.training
    if (weight && training != '---') {
      let result = (weight / 10 * 300)
      if (training === 'no training day') {
        this.setState({
          result: result + ' ml'
        });
      }
      if (training === 'mild training day') {
        result = result + 500 + ' ml'
        this.setState({
          result
        });
      } else if (training === 'moderate training day') {
        result = result + 1000 + ' ml'
        this.setState({
          result
        });
      } else if (training === 'hard training day') {
        result = result + 1500 + ' ml'
        this.setState({
          result
        });
      }
    } else {
      alert('Please put all of the data.')
    }

  }

  render() {
    return (
      <div className={classes.Card} style={{ backgroundColor: 'cadetblue' }}>
        <Header content='Water Demand' color='white' fontSize='30px' />
        <FormWater
          onChange={this.handleInput}
        />
        <Button onClick={this.startCalc} />
        <Result result={this.state.result} />
      </div>
    )
  }
}