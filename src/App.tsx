import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Category } from "./components/Category";
import { Social } from "./components/Social";
import { Menu } from "./components/Menu";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <Routes>
      <Route path="category" element={<Category />} />
      <Route path="social" element={<Social />} />
      <Route path="menu" element={<Menu />} />
      <Route path="topbar" element={<Topbar />} />
    </Routes>
  );
}

export default App;
