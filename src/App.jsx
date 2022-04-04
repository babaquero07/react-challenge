import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import UserView from "./Pages/UserView/UserView";
import useInitialState from "./Hooks/useInitialState";
import UserContext from "./Context/UserContext";
import MyRepositories from "./Pages/MyRepositories/MyRepositories";

const App = () => {
  const initialState = useInitialState();

  return (
    <UserContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<RegisterForm />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/userView" element={<UserView />}></Route>
          <Route
            exact
            path="/userView/my-repositories"
            element={<MyRepositories />}
          ></Route>
          <Route exact path="*" element={<RegisterForm />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
