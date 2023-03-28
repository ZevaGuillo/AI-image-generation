import React from "react";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import GeneratePage from "../pages/GeneratePage";
import HomePage from "../pages/HomePage";
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { useEffect } from 'react';
import { startLoginWithGoogle } from "../store/auth/thunks";
import UserPage from "../pages/UserPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const AppRouter = () => {

  const {status} = useAppSelector(state=> state.auth); 
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(startLoginWithGoogle())
  },[])

  return <Routes>
    <Route path="/" element={<HomePage/>}/>

    {status === 'authenticated' && 
      <Route path="/generate" element={<GeneratePage/>}/>
    }

    <Route path="/:username" element={<UserPage/>}/>

    <Route path="/privacy" element={<PrivacyPolicy/>}/>

    <Route path="/*" element={<Navigate to={'/'}/>}/>


  </Routes>
};

export default AppRouter;
