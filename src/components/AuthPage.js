import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getIsAuthorized} from '../reducers/auth';
import {authRequest} from '../actions/auth';

const Container = styled.div`
    width: 300px;
`;

class AuthPage extends Component {

    state = {
        value: '3679cf544a7827367df5e0b88f39b2fd9eeea2c1'
    }

    onChangeHandle = (e) => {
        const {target: {value}} = e;
        this.setState({value});
    }

    onKeyDownHandle = (e) => {
        const {value} = this.state;
        if (e.keyCode === 13 && value) {
            const {authRequest} = this.props;
            authRequest({name: 'dex157', token: value});
        }
    }

    render() {
        const {value} = this.state;
        const {auth: isAuthorized} = this.props;
        if (isAuthorized) return <Redirect to='/user/dex157' />;
        return (
            <Container>
                <p>Получить токен нужно на своей странице github, перейдите по <a href="https://github.com/settings/tokens">адресу</a> и создать себе токен. Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.</p>
                <input placeholder='auth_token' value={value} onChange={this.onChangeHandle} onKeyDown={this.onKeyDownHandle} />
                <p>После ввода нажать Enter</p>
            </Container>
        );
    }

}

export default connect(
    state => ({
        auth: getIsAuthorized(state)
    }),
    dispatch => ({
        authRequest: (payload) => dispatch(authRequest(payload))
    })
)(AuthPage);