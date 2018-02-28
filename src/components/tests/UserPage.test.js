import React from 'react';
import {UserPage, UserImage} from '../UserPage';
import Followers from '../Followers';
import {authRequest} from '../../actions/auth';
import Spinner from 'react-svg-spinner';
import {mount, shallow} from 'enzyme';

describe('Компонент UserPage', () => {
    
    const wrapper = shallow(<UserPage authRequest={authRequest} isFetching={true} users={{data: {}}} />);
    
    it('Содержит метод componentDidMount', () => {
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('Содержит метод componentWillReceiveProps', () => {
        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });
    
    it('Содержит спинер/лоадер, если props.isFetching === true', () => {
        expect(wrapper.find(Spinner)).toBeTruthy();
    });

    wrapper.setProps({isFetching: false, users: {data: null}});
    wrapper.update();

    it('Проверить наличие сообщения об отсутствии пользователя, если isFetching === false && data == null', () => {
        expect(wrapper.find(<div className='error' />)).toBeTruthy();
    });

    wrapper.setProps({isFetching: false, users: {data: {login: 'dex157', followers: 37}}});
    wrapper.update();

    describe('В основной верстке должен быть', () => {
        
        it ('аватар пользователя', () => {
            expect(wrapper.find(UserImage).length).toEqual(1);
        });

        it ('login пользователя', () => {
            expect(wrapper.find('.login').length).toEqual(1);
            expect(wrapper.find('.login').text()).toEqual('dex157');
        });

        it ('количество фаловеров пользователя', () => {
            expect(wrapper.find('.followers').length).toEqual(1);
            expect(wrapper.find('.followers').text()).toEqual('Followers: 37');
        });

        it ('компонент Followers с передачей login через props', () => {
            expect(wrapper.find(Followers).length).toEqual(1);
            expect(wrapper.find(Followers).prop('login')).toEqual('dex157');
        });
    });

});