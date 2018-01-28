import React, {Component} from 'react';

export default class CardForm extends Component {
    
    handleChangeForm = (e) => this.props.onChangeForm(e.target.name, e.target.value)

    componentWillUnmount() {

    }

    render() {
        console.log('CardForm render!');
        const {cardNumber, onChangeForm, onChangeTimeOver} = this.props;
        return (
            <div>
                <h1 className='title'>Card information</h1>
                <div className='card-form'>
                    <input type='text' name='cardNumber' value={cardNumber} placeholder='0000 0000 0000 0000' onChange={this.handleChangeForm} />
                </div>
            </div>
        );
    }

}