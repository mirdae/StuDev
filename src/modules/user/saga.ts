import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import AT from './actionTypes'
import API from '../../api'

function* authSaga() {
  try {
    const data = yield call(API.User.auth)
    if (data.message === 'success') {
      yield put({
        type: AT.REQUEST_AUTH_SUCCESS,
        payload: data,
      })
    } else {
      console.log(data)
    }
  } catch (error) {
    yield put({
      type: AT.REQUEST_AUTH_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* signUpSaga({ payload }: any) {
  try {
    const { message } = yield call(API.User.signUp, payload)

    if (message === 'success') {
      yield put({
        type: AT.REQUEST_SIGN_UP_SUCCESS,
        payload: true,
      })
    }
    yield put({
      type: AT.REQUEST_SIGN_UP_SUCCESS,
      payload: false,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_SIGN_UP_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* signInSaga({ payload }: any) {
  try {
    const data = yield call(API.User.signIn, payload)
    yield put({
      type: AT.REQUEST_SIGN_IN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_SIGN_IN_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* logoutSaga({ payload }: any) {
  try {
    const data = yield call(API.User.logout)
    yield put({
      type: AT.REQUEST_LOGOUT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_LOGOUT_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* duplicateIdCheckSaga({ payload }: any) {
  try {
    const data = yield call(API.User.duplicateIdCheck, payload)
    yield put({
      type: AT.REQUEST_DUPLICATE_ID_CHECK_SUCCESS,
      payload: data.duplicate,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_DUPLICATE_ID_CHECK_ERROR,
      payload: error,
      error: true,
    })
  }
}

function* duplicateNicknameCheckSaga({ payload }: any) {
  try {
    const data = yield call(API.User.duplicateNicknameCheck, payload)
    yield put({
      type: AT.REQUEST_DUPLICATE_NICKNAME_CHECK_SUCCESS,
      payload: data.duplicate,
    })
  } catch (error) {
    yield put({
      type: AT.REQUEST_DUPLICATE_NICKNAME_CHECK_ERROR,
      payload: error,
      error: true,
    })
  }
}

export function* userSaga() {
  yield takeEvery(AT.REQUEST_AUTH, authSaga)
  yield takeLatest(AT.REQUEST_SIGN_UP, signUpSaga)
  yield takeLatest(AT.REQUEST_SIGN_IN, signInSaga)
  yield takeLatest(AT.REQUEST_LOGOUT, logoutSaga)
  yield takeEvery(AT.REQUEST_DUPLICATE_ID_CHECK, duplicateIdCheckSaga)
  yield takeEvery(
    AT.REQUEST_DUPLICATE_NICKNAME_CHECK,
    duplicateNicknameCheckSaga
  )
}
