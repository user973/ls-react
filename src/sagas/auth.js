import {call, put, takeLatest} from 'redux-saga/effects';
import {authRequest, authSuccess, authFailure} from '../actions/auth';
import {user} from '../api';

function* fetchAuth(action) {
    try {
        const authResult = yield call(user, action.payload.name, action.payload.token);
        yield put(authSuccess(authResult));
    } catch (error) {
        yield put(authFailure(error));
    }
}

function* authRequestWatch() {
    yield takeLatest(authRequest, fetchAuth);
}

export default authRequestWatch;