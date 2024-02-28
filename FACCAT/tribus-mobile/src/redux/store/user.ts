import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  cpf: '',
  cnpj: '',
  isLoggedIn: false,
  loading: false,
  error: '',
  type: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequestPending: state => {
      state.loading = true;
    },
    userRequestError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    userRequestSuccess: (state, action) => {
      state.data = action.payload;
      state.error = '';
      state.loading = false;
    },
    setUserType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { userRequestPending, userRequestError, userRequestSuccess } =
  userSlice.actions;

export default userSlice.reducer;
