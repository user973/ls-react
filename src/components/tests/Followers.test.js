import React from 'react';
import {Followers, Follower} from '../Followers';
import {authRequest} from '../../actions/auth';
import {followersRequest} from '../../actions/followers';
import Spinner from 'react-svg-spinner';
import {mount, shallow} from 'enzyme';

describe('тесты для компоненты Followers', () => {

    const followers = {
        response: [],
        isFetching: true
    };
    const props = {followers, followersRequest, token: '', login: ''}
    const wrapper = shallow(<Followers {...props} />);
    
    it('Проверить наличие метода класса componentDidMount', () => {
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('Проверить наличие лоадера/спинера, если isFetching === true', () => {
        wrapper.setProps({followers: {isFetching: true, response: []}});
        wrapper.update();
        expect(wrapper.find(Spinner).exists()).toEqual(true);
    });

    it('Проверить что возвращаются компоненты Followers в том количестве, в котором передаются в props.followers', () => {
        //wrapper.setProps({followers: {isFetching: false, response: [{id: 0, avatar_url: '', login: '222'}, {id: 1, avatar_url: '', login: '111'}]}});
        wrapper.setProps({followers: {isFetching: false, response: [{id: 0}, {id: 1}]}});
        wrapper.update();
        expect(wrapper.find(Follower).length).toEqual(2);
    });

});