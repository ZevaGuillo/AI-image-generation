import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pt-12">
          <AppRouter />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
