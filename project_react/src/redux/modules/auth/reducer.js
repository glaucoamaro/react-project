import loginActionTypes from './actionTypes';

const initialState = {
  isLoggedIn: true,
  token: false,
  user: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginActionTypes.SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case loginActionTypes.FAIL: {
      const newState = { ...initialState };
      return newState;
    }
    default:
      return state;
  }
};
