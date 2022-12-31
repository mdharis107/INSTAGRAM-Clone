const initialState = {
  iAuth: false,
  isError: false,
  isAuthLoading: false,
  token: "",
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return oldState;
  }
};
