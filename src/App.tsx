import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/Signin";
import LoginPage from "./pages/Login";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
