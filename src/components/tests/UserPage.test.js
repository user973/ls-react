import React from 'react';
import {UserPage, UserImage} from '../UserPage';
// import {Followers} from '../Followers';
import {authRequest} from '../../actions/auth';
import Spinner from 'react-svg-spinner';
import {mount} from 'enzyme';

// Проверить наличие метода componentDidMount,
// Проверить наличие метода componentWillReceiveProps,
// Проверить наличие спинера/лоадера если props.isFetching === true,
// Проверить наличие сообщения об отсутствии пользователя если isFetching === false && user == null,
// В основной верстке должен быть:
// аватар пользователя,
// login пользователя,
// количество фаловеров пользователя,
// компонент Followers с передачей login через props.

// state => ({
//     users: getUsers(state),
//     token: getAuthToken(state),
//     isFetching: getUsersIsFetching(state)
// }),
// dispatch => ({
//     authRequest: (payload) => dispatch(authRequest(payload))
// })

// jest.mock('../../api');

// const user = require('../../api').user;
// user.mockImplementation(() => new Promise(r => r(
//     {
//         "login": "dex157",
//         "id": 862978,
//         "avatar_url": "https://avatars2.githubusercontent.com/u/862978?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/dex157",
//         "html_url": "https://github.com/dex157",
//         "followers_url": "https://api.github.com/users/dex157/followers",
//         "following_url": "https://api.github.com/users/dex157/following{/other_user}",
//         "gists_url": "https://api.github.com/users/dex157/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/dex157/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/dex157/subscriptions",
//         "organizations_url": "https://api.github.com/users/dex157/orgs",
//         "repos_url": "https://api.github.com/users/dex157/repos",
//         "events_url": "https://api.github.com/users/dex157/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/dex157/received_events",
//         "type": "User",
//         "site_admin": false,
//         "name": "Artem Samofalov",
//         "company": null,
//         "blog": "",
//         "location": "Earth",
//         "email": null,
//         "hireable": null,
//         "bio": "Ruby-on-Rails, react redux software engineer",
//         "public_repos": 40,
//         "public_gists": 13,
//         "followers": 36,
//         "following": 37,
//         "created_at": "2011-06-20T23:43:15Z",
//         "updated_at": "2018-02-11T17:03:40Z"
//       }
// )));

describe('Компонент UserPage', () => {
    
    const wrapper = mount(<UserPage authRequest={authRequest} isFetching={true} users={{data: {}}} />);
    
    it('Содержит метод componentDidMount', () => {
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('Содержит метод componentWillReceiveProps', () => {
        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });
    
    it('Содержит спинер/лоадер, если props.isFetching === true', () => {
        expect(wrapper.find(<Spinner />)).toBeTruthy();
    });

    wrapper.setProps({isFetching: false, users: {data: null}});
    wrapper.update();

    it('Проверить наличие сообщения об отсутствии пользователя если isFetching === false && data == null', () => {
        expect(wrapper.find(<div className='error' />)).toBeTruthy();
    });

    wrapper.setProps({isFetching: false, users: {data: {login: 'dex157', followers: 37}}});
    wrapper.update();

    describe('В основной верстке должен быть', () => {
        console.log(wrapper.debug());
        console.log(wrapper.contains(UserImage));
        it ('аватар пользователя', () => {
            expect(wrapper.find(<UserImage />)).toBeTruthy();
        });

        it ('login пользователя', () => {
            const usersProps = wrapper.prop('users');
            expect(usersProps.hasOwnProperty('data')).toBeTruthy();
            const data = usersProps.data;
            expect(data.hasOwnProperty('login')).toBeTruthy();
            expect(data.login).toBe('dex157');
        });

        it ('количество фаловеров пользователя', () => {
            const usersProps = wrapper.prop('users');
            expect(usersProps.hasOwnProperty('data')).toBeTruthy();
            const data = usersProps.data;
            expect(data.hasOwnProperty('followers')).toBeTruthy();
            expect(data.followers).toBe(37);
        });

        // it ('компонент Followers с передачей login через props', () => {
        //     console.log('>>>', wrapper.find(Followers));
        //     expect(wrapper.find(<Followers />)).toBeTruthy();
        //     expect(wrapper.find(Followers).get(0).props.login).to.equal('dex157');
        //     console.log(wrapper.debug());
        //     console.log(wrapper.find(Followers));
        //     expect(1+2).toBe(3);
        //     console.log(wrapper.props());
        //     expect(wrapper.find(Followers).exists()).toBeTruthy();
        // });
    });

});