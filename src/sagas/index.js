import {fork} from 'redux-saga/effects';
import authRequestWatch from './auth';
import followersRequestWatch from './followers';
// import {} from './users';

export default function* () {
    yield fork(authRequestWatch);
    yield fork(followersRequestWatch);
}