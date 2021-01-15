import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./component/home/home";
import { Route } from "react-router";
import Login from "./component/auth/login/login";
import Signup from "./component/auth/signup/signup";
import Dashboard from "./component/dashboard/dashboard";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path = "/signup" exact component = {Signup}></Route>
      <Route path = "/dashboard" exact component = {Dashboard}></Route>
     
    </React.Fragment>
  );
}

export default App;
