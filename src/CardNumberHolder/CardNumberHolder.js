import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  
  state = {
    cardNumber: ''
  };
  
  handleChange = (e) => {
    let {target:{value}} = e;
    this.setState({
        cardNumber: this.refs.input.normalize(value)
    });
  };

  render() {
    const {cardNumber} = this.state;
    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} ref='input' />
    );
  }
}

export default CardNumberHolder;
