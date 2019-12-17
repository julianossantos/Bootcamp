import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, ...rest } = payload.data;

    // object assign serve para unir 2 objetos
    const profile = {
      id,
      ...rest,
    };

    // faz a atualização dos dados com o método put da api
    const response = yield call(api.put, 'users', profile);

    Alert.alert('Successo!', 'Perfil atualizado com successo');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do seu perfil, verifique os seus dados.'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
