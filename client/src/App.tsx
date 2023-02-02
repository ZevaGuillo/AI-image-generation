import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";

const App = () => {
  

  return (
    
    <>
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
    </>
  );
};

export default App;
