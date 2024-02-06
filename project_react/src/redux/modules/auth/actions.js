import loginActionTypes from './actionTypes';

export const loginRequest = (payload) => ({
  type: loginActionTypes.REQUEST,
  payload,
});

export const loginFail = (payload) => ({
  type: loginActionTypes.FAIL,
  payload,
});
export const loginSuccess = (payload) => ({
  type: loginActionTypes.SUCCESS,
  payload,
});
