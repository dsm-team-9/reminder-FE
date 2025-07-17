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
import Game from "./pages/Game";
import GameLoadingPage from "./pages/GameLoadingPage";
import GameResultPage from "./pages/GameResultPage";

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
      <Route path="/game" element={<Game />} />
      <Route path="loading" element={<GameLoadingPage />} />
      <Route path="result" element={<GameResultPage />} />
    </Routes>
  );
}

export default App;
