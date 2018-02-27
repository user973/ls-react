import React, {Component} from 'react';
import {connect} from 'react-redux';
import Followers from './Followers';
import {authRequest} from '../actions/auth';
import {getUsers, getUsersIsFetching} from '../reducers/users';
import {getFollowersIsFetching} from '../reducers/followers';
import {getAuthToken} from '../reducers/auth';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';

const UserPageContainer = styled.div`
    margin: 40px 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
`;

const UserContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
`;

const UserImgContainer = styled.div`
    width: 300px;
    height: 300px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #eee;
`;

export const UserImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const UserInfoContainer = styled.div`
    padding-left: 20px;
    text-align: left;
`;

export class UserPage extends Component {

    state = {
        name: 'dex157'//this.props.users.response.login
    }
    
    componentDidMount() {
        const {authRequest, token} = this.props;
        const {name} = this.state;
        authRequest({name, token});
    }

    componentWillReceiveProps(nextProps) {
        let name = "";
        if (nextProps.match && nextProps.match.params && nextProps.match.params.name && nextProps.match.params.name !== this.state.name) {
            name = nextProps.match.params.name;
        } else if (nextProps.match && nextProps.match.path === "/user/dex157") {
            name = "dex157";
        }
        if (name && name !== this.state.name) this.setState({name});
    }

    componentDidUpdate(prevProps, prevState) {
        const {name} = this.state;
        if (prevState.name !== name && authRequest) {
            const {authRequest, token} = this.props;
            authRequest({name, token});
        }
    }

    render() {
        
        const {
            users: {data},
            isFetching
        } = this.props;
        
        const {name} = this.state;

        if (isFetching) return <Spinner size="64px" color="fuchsia" gap={5} />;
        
        if (isFetching === false && data == null) return <div className='error'>Ошибка: отсутствие пользователя</div>;
        
        return (
            <UserPageContainer>
                <UserContainer>
                    <UserImgContainer>
                        <UserImage src={data.avatar_url} alt={data.login} />
                    </UserImgContainer>
                    <UserInfoContainer>
                        <h3>{data.login}</h3>
                        <p>{`Followers: ${data.followers}`}</p>
                        <p>{`Public repos: ${data.public_repos}`}</p>
                    </UserInfoContainer>
                </UserContainer>
                <Followers login={name} />
            </UserPageContainer>
        );

    }

}


export default connect(
    state => ({
        users: getUsers(state),
        token: getAuthToken(state),
        isFetching: getUsersIsFetching(state)
    }),
    dispatch => ({
        authRequest: (payload) => dispatch(authRequest(payload))
    })
)(UserPage);