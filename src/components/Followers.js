import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {followersRequest} from '../actions/followers';
import {getFollowers} from '../reducers/followers';
import {getAuthToken} from '../reducers/auth';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';

const FollowersContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 20px 60px;
`;

const FollowerItemContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 30px;
`;

const FollowerImgContainer = styled.img`
    width: 100px;
    height: 100px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #eee;
`;

const FollowerInfoContainer = styled.div`
    padding-left: 20px;
    text-align: left;
`;

export function Follower({item}) {
    return (
        <FollowerItemContainer>
            <FollowerImgContainer src={item.avatar_url} alt={item.login} />
            <FollowerInfoContainer>
                <Link to={`/user/${item.login}`}>
                    <h3>{item.login}</h3>
                </Link>
            </FollowerInfoContainer>
        </FollowerItemContainer>
    );
};

export class Followers extends PureComponent { 
        
    componentDidMount() {
        const {followersRequest, token, login} = this.props;
        followersRequest({name: login, token});
    }

    render() {
        
        const {
            followers: {response, isFetching}
        } = this.props;
        
        
        if (isFetching) return <Spinner size="64px" color="fuchsia" gap={5} />;
        if (response === null) return null;

        return (            
            <FollowersContainer>
                {
                    response.map((item, index) => {
                        return <Follower key={item.id} item={item} />;
                    })
                }
            </FollowersContainer>
        );
    }

}


export default connect(
    state => ({
        followers: getFollowers(state),
        token: getAuthToken(state)
    }),
    dispatch => ({
        followersRequest: (payload) => dispatch(followersRequest(payload))
    })
)(Followers);