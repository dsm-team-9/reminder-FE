import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FriendMuseum from "./components/FriendMuseum";
import Antiquity from "./components/Antiquity";
import CreateItem from "./components/CreateItems";
import Subject from "./components/Subject";
import Detail from "./components/Detail";
import HomeDetailPage from "./pages/HomeDetailPage";
import Show from "./components/Show";
import Chat from "./components/Chat";

// Imports from auth-page branch
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="homePage" element={<HomePage />} />
      <Route path="friend" element={<FriendMuseum />} />
      <Route path="antiquity" element={<Antiquity />} />
      <Route path="create" element={<CreateItem />} />
      <Route path="subject" element={<Subject />} />
      <Route path="detail" element={<Detail />} />
      <Route path="homeDetail" element={<HomeDetailPage />} />
      <Route path="show" element={<Show />} />
      <Route path="chat" element={<Chat />} />

      {/* Routes from auth-page branch */}
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
