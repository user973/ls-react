import React, {Component} from 'react';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';
import Step from './Step';

export default class App extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    };

    handleClickNextForm = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    handleTabClick = (step) => {
        this.setState({
            step: step
        });
    };

    handleChangeForm = (key, value) => {
        const inputRecord = {};
        inputRecord[key] = value;
        this.setState(inputRecord);
    };

    isFormCommitable = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;
        switch (step) {
            case 1:
                return firstName !== '' && lastName !== '' && email !== '' && email.includes('@');
            case 2:
                return cardNumber.length === 16;
            default:
                return false;
        }
        
    };

    renderForm = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;
        switch (step) {
            case 1:
                return <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm} />;
            case 2:
                return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />;
            default:
                return 'Поздравляем!';
        }
    };

    render() {
        
        const {step} = this.state;
        const titles = [
            'Personal information',
            'Card information',
            'Finish'
        ];
        const disabled = this.isFormCommitable();
        
        return (
            <div className='container'>
                <div className='tab-panel'>
                {
                    titles.map((item, index) => {
                        return (
                            <Step key={item + index} isSelected={step === index + 1} isClickable={index + 1 < step} number={index + 1} onClick={this.handleTabClick}>
                                {item}
                            </Step>
                        )
                    })
                }
                </div>
                <div className='form-content'>
                    {
                        this.renderForm()
                    }
                </div>
                <div className='button-panel'>
                    <button className='button-next' onClick={this.handleClickNextForm} disabled={!disabled}>Next</button>
                </div>
            </div>
        );
        
    }

}