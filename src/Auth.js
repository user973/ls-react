import React, {Component} from 'react';
import {authorizeUser, isAuthorized} from './AuthorizeApi';
import Redirect from 'react-router-dom/Redirect';

export default class Auth extends Component {

    state = {
        email: '',
        password: '',
        isAuthorized: isAuthorized,
        showError: false
    };

    handleSubmit = () => {
        const {email,password} = this.state;
        const isAuthorized = authorizeUser(email,password);
        this.setState({
            isAuthorized,
            showError:!isAuthorized
        });
    };

    handleChange = (e) => {
        const {target: {
            value, name
        }} = e;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {email,password,isAuthorized,showError} = this.state;
        if (isAuthorized) {
            return <Redirect to='/' />;
        }
        return (
            <div>
                <div>
                    <input name='email' placeholder='email' onChange={this.handleChange} value={email} />
                    <input name='password' placeholder='password' onChange={this.handleChange} value={password} />
                    {showError&&<p className='error'>Неверный пароль и/или почта.</p>}
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    };
    
};