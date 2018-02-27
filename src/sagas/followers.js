import {call, put, takeLatest} from 'redux-saga/effects';
import {followersRequest, followersSuccess, followersFailure} from '../actions/followers';
import {followers} from '../api';

function* fetchFollowers(action) {
    try {
        const followersResult = yield call(followers, action.payload.name, action.payload.token);
        yield put(followersSuccess(followersResult));
    } catch (error) {
        yield put(followersFailure(error));
    }
}

function* followersRequestWatch() {
    yield takeLatest(followersRequest, fetchFollowers);
}

export default followersRequestWatch;