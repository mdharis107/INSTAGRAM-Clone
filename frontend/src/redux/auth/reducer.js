import * as ele from "./actionTypes";

const initialState = {
  iAuth: false,
  isError: false,
  isAuthLoading: false,
  token: "",
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ele.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case ele.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: true,
        token: payload,
      };
    case ele.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return oldState;
  }
};
