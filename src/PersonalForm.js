import React, {Component} from 'react';

export default class App extends Component {

    handleChangeForm = (e) => this.props.onChangeForm(e.target.name, e.target.value)

    render() {
        console.log('PersonalForm render!');
        const {firstName, lastName, email} = this.props;
        return (
            <div>
                <h1 className='title'>Personal information</h1>
                <div className='personal-form'>
                    <input type='text' name='firstName' value={firstName} placeholder='First name' onChange={this.handleChangeForm} />
                    <input type='text' name='lastName' value={lastName} placeholder='Last name' onChange={this.handleChangeForm} />
                    <input type='text' name='email' value={email} placeholder='Email' onChange={this.handleChangeForm} />
                </div>
            </div>
        );
    }
    
}