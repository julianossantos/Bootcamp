import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { userId } = payload;

  try {
    const response = yield call(api.get, `students/${userId}/checkins`);

    // const { checkinExists.id } = response.data;

    yield put(signInSuccess(userId, response.data));

    // history.push('/students');
  } catch (err) {
    Alert.alert(
      'Usuário não localizado',
      `Houve um erro no login, verifique o ID informado`
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve  um erro no cadastro verifique os seus dados'
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
