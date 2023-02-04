import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";


export const startCreatingUserWithEmailPassword = ({email, password, displayName}:any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

    }
}

export const startLoginWithEmailPassword = ({email, password}:any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {


    }
}

export const startLogout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {


    }
}