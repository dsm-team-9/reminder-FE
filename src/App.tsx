// src/App.tsx
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import HomeDetailPage from "./pages/HomeDetailPage";
import FriendMuseum from "./components/FriendMuseum";
import Antiquity from "./components/Antiquity";
import CreateItem from "./components/CreateItems";
import Subject from "./components/Subject";
import Detail from "./components/Detail";
import Show from "./components/Show";
import Chat from "./components/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Chatting from "./pages/Chatting";
import ArtifactDetail from "./components/ArtifactDetail";

function App() {
  const dummyClose = () => {};

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/friend" element={<FriendMuseum />} />
      <Route path="/antiquity" element={<Antiquity />} />
      <Route path="/create" element={<CreateItem />} />
      <Route path="/subject" element={<Subject onClose={dummyClose} />} />
      <Route path="/detail" element={<Detail onClose={dummyClose} />} />
      <Route path="/homeDetail/:nickname" element={<HomeDetailPage />} />
      <Route path="/show" element={<Show onClose={dummyClose} />} />
      <Route path="/chat" element={<Chat onClose={dummyClose} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="my" element={<MyPage />} />
      <Route path="chatting" element={<Chatting />} />
      <Route path="artifact" element={<ArtifactDetail />} />
    </Routes>
  );
}

export default App;
