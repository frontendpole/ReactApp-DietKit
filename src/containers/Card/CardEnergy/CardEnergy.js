import React, { Component } from 'react';
import classes from '../../Card/Card.module.css';
import Header from '../../../components/Header/Header';
import FormEnergy from '../../../components/Form/FormEnergy/FormEnergy'
import Button from '../../../elements/Button/Button'
import Result from '../../../elements/Result/Result'

export class CardEnergy extends Component {
  state = {
    age: '',
    sex: '---',
    weight: '',
    lifestyle: '---',
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
    let age = this.state.age
    let sex = this.state.sex
    let weight = this.state.weight
    let lifestyle = this.state.lifestyle
    if (age && sex != "---" && weight && lifestyle != '---') {
      if (age >= 10 && age <= 18) {
        if (sex === 'male') {
          let result = (weight * 17.5) + 651;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
        if (sex === 'female') {
          let result = (weight * 12.2) + 746;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
      }
      else if (age >= 19 && age <= 30) {
        if (sex === 'male') {
          let result = (weight * 15.3) + 679;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
        if (sex === 'female') {
          let result = (weight * 14.7) + 496;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
      }
      else if (age >= 31 && age <= 100) {
        if (sex === 'male') {
          let result = (weight * 11.6) + 879;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
        if (sex === 'female') {
          let result = (weight * 8.7) + 829;
          let lifestyleValue = lifestyle === 'sedentary' ? 1.4 : lifestyle === 'moderate' ? 1.7 : lifestyle === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          result = `${Math.floor(result)} kcal`;
          this.setState({
            result
          });
        }
      }
      else {
        alert("Your age must be from 10 to 100, please put another age value.")
      }
    } else {
      alert('Please put all of the data.')
    }

  }

  render() {
    return (
      <div className={classes.Card} style={{ backgroundColor: 'rgb(211, 117, 117)' }}>
        <Header content='Energy Demand' color='blanchedalmond' fontSize='30px' />
        <FormEnergy
          onChange={this.inputHandler}
        />
        <Button onClick={this.startCalc} />
        <Result result={this.state.result} />
      </div>
    )
  }
}