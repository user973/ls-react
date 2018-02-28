// Проверить, что экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure:
// изменяют флаг isFetching,
// очищают поле data, если приходит экшен fetchUserRequest,
// наполняют данными data, если приходит экшен fetchUserSuccess,
// очищают поле error, если приходит экшен fetchUserRequest или fetchUserSuccess,
// наполняют данными error, если приходит экшен fetchUserFailure.

import users from '../users';
import {
    usersRequest,
    usersSuccess,
    usersFailure
} from '../../actions/users';
import {
    authRequest,
    authSuccess,
    authFailure
} from '../../actions/auth';

describe('reducer users', () => {  

    it('экшен authRequest изменяет флаг isFetching', () => {
        let state = {isFetching: false}
        const next = users(state, authRequest());
        expect(next.isFetching).toEqual(true);
    });

    it('экшен authSuccess изменяет флаг isFetching', () => {
        let state = {isFetching: true}
        const next = users(state, authSuccess());
        expect(next.isFetching).toEqual(false);
    });

    it('экшен authFailure изменяет флаг isFetching', () => {
        let state = {isFetching: true}
        const next = users(state, authFailure());
        expect(next.isFetching).toEqual(false);
    });
        
    it('очищает поле data, если приходит экшен authRequest', () => {
        let state = {data: "some_data"}
        const next = users(state, authRequest());
        expect(next.data).toBeNull();
    });

    it('наполняет данными data, если приходит экшен authSuccess', () => {
        let state = {data: null}
        const payload = "some_data";
        const next = users(state, authSuccess(payload));
        expect(next.data).not.toBeNull();
        expect(next.data).toEqual(payload);
    });
    
    it('очищает поле error, если приходит экшен authRequest', () => {
        let state = {error: "error"}
        const next = users(state, authRequest());
        expect(next.error).toBeNull();
        expect(next.error).not.toEqual(state.error);
    });

    it('очищает поле error, если приходит экшен authSuccess', () => {
        let state = {error: "error"}
        const payload = "new_error";
        const next = users(state, authSuccess(payload));
        expect(next.error).toBeNull();
        expect(next.error).not.toEqual(state.error);
    });

    it('наполняет данными error, если приходит экшен authFailure', () => {
        let state = {error: null}
        const payload = "new_error";
        const next = users(state, authFailure(payload));
        expect(next.error).not.toBeNull();
        expect(next.error).toEqual(payload);
    });

});