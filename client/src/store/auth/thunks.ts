import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { checkingCredentials, login, logout, verifyCredits } from './authSlice';



export const startLoginWithGoogle = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch(checkingCredentials())
      const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/auth/login/success`, { credentials: 'include' });
      const data = await response.json();
      dispatch(login(data.user))

    } catch (error) {
      dispatch(logout())
    }
  }
}

export const refetchCredits = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/generate/credits`, { credentials: 'include' });
      const data = await response.json();
      
      dispatch(verifyCredits(data))
    } catch (error) {
      console.log('error loading credits');
    }
  }
}