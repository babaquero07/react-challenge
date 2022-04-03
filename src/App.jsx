import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import UserView from "./Pages/UserView/UserView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<RegisterForm />}></Route>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/userView" element={<UserView />}></Route>
        <Route exact path="*" element={<RegisterForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
