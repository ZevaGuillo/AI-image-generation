import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', // checking, not-authenticated, 'authenticated'
  _id: "",
  username: '',
  email: '',
  profilePic: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state._id = payload._id
      state.username = payload.username
      state.email = payload.email
      state.profilePic = payload.profilePic
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';

    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions

export default authSlice.reducer