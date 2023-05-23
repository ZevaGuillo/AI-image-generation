import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/user';

const initialState: User = {
  status: 'checking', // checking, not-authenticated, 'authenticated'
  _id: "",
  username: '',
  slug: '',
  email: '',
  profilePic: '',
  posts: [],
  credits: 0,
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
      state.credits = payload.credits
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
    },
    verifyCredits: (state, {payload}) => {
      state.credits= payload.credits
    }
  }
});

export const { login, logout, checkingCredentials, verifyCredits } = authSlice.actions

export default authSlice.reducer