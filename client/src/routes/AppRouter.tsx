import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import GeneratePage from "../pages/GeneratePage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/generate" element={<GeneratePage/>}/>
  </Routes>;
};

export default AppRouter;
