import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/user';

const initialState: User = {
  status: 'checking', // checking, not-authenticated, 'authenticated'
  _id: "",
  username: '',
  slug: '',
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
      state.slug = payload.slug
      state.email = payload.email
      state.profilePic = payload.profilePic
    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state._id = ''
      state.username = ''
      state.slug = ''
      state.email = ''
      state.profilePic = ''
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions

export default authSlice.reducer