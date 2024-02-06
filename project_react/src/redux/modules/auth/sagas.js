import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as actions from './actions';
import axios from '../../../services/axios';
import loginActionTypes from './actionTypes';

function MinhaPagina() {
  const navigate = useNavigate();
  navigate('/');
}

function* loginRequest({ payload }) {
  try {
    const res = yield call(axios.post, '/tokens/', payload);
    yield put(actions.loginSuccess({ ...res.data }));

    toast.success('success sagas');

    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    MinhaPagina();
  } catch (err) {
    yield put(actions.loginFail());
  }
}

export default all([takeLatest(loginActionTypes.REQUEST, loginRequest)]);
