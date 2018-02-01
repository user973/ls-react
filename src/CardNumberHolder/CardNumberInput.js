import React, {Component} from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    const number = this.format(this.props.cardNumber);
    this.state = {
      number: number
    };
  }
  
  format = (cardNumber='') => {
    const valid = (typeof cardNumber === 'string' || typeof cardNumber === 'number');
    return valid ? cardNumber.toString().split('').map((x, i) => {
      if (i%4 === 3 && i !== cardNumber.length - 1) {
        return x + ' ';
      } else {
        return x;
      }
    }).join('') : '';
  };

  static normalize(cardNumber='') {
    const valid = (typeof cardNumber === 'string' || typeof cardNumber === 'number');
    return valid ? cardNumber.toString().split('').map((x, i) => {
      if (x === ' ') {
        return '';
      } else {
        return x;
      }
    }).join('') : '';
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('cardNumber')) {
      this.setState({
        number: this.format(nextProps.cardNumber)
      });
    }
  }

  render() {
    const {onChange} = this.props;
    const {number} = this.state;
    return (
      <input type='text' value={number} onChange={onChange} />
    );
  }
}

export default CardNumberInput;
