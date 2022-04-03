import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<RegisterForm />}></Route>
        <Route exact path="*" element={<RegisterForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
