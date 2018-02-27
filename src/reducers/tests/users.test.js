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

describe('reducer users', () => {
    
    it('1+2===3', () => {
        expect(1+2).toBe(3);
    });
    
    // it('экшены fetchUserRequest, fetchUserSuccess, fetchUserFailure', () => {
    //     const next = users(undefined, usersRequest());
    //     expect(next.isFetching).toBeFalsy();
    //     //expect(next.isFetching).toBeTruthly();
    // });
    
    // it('экшены fetchUserSuccess', () => { 
    //     const next = users(undefined, usersSuccess());
    //     //expect(next.isFetching).toBeFalsy();
    //     expect(next.isFetching).toBeTruthly();
    // });
});