import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'checking', // checking, not-authenticated, 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.status= 'authenticated';
      state.uid= payload.uid;
      state.email= payload.email;
      state.displayName= payload.displayName;
      state.photoURL= payload.photoURL;
      state.errorMessage= null;
    },
    logout: (state, {payload}) => {
      state.status= 'not-authenticated';
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const {login, logout, checkingCredentials} = authSlice.actions

export default authSlice.reducer