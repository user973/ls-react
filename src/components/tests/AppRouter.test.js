import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppRouter from '../AppRouter';
import PrivateRoute from'../PrivateRoute';
import {shallow} from 'enzyme';

describe('Компонент AppRouter', () => {
    const wrapper = shallow(<AppRouter />);
    it('Содержит компонент Switch', () => {
        expect(wrapper.find(<Switch />)).toBeTruthy();
    });
    it('Содержит компонент <PrivateRoute path="/user/dex157" />', () => {
        expect(wrapper.find(<PrivateRoute path="/user/dex157" />)).toBeTruthy();
    });
    it('Содержит компонент <PrivateRoute path="/user/:name" />', () => {
        expect(wrapper.find(<PrivateRoute path="/user/:name" />)).toBeTruthy();
    });
    it('Содержит комполнент <Route path="/login" />', () => {
        expect(wrapper.find(<Route path="/login" />)).toBeTruthy();
    });
});