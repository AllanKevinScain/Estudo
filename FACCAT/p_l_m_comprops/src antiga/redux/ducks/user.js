const typesPrefix = '@user';

export const types = {
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  SET_USERDATA: `${typesPrefix}/SET_USERDATA`,
};

const INITIAL_STATE = {
  email: '',
  password: '',
  userId: 0,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case types.SET_USERDATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setIsLoading = (isLoading) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const setUsersData = (email, password) => ({
  type: types.SET_USERDATA,
  payload: { email, password }
});


export const allActions = {
  setIsLoading,
};