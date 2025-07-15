import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Category } from "./components/Category";
import { Social } from "./components/Social";
import { Menu } from "./components/menu";

function App() {
  return (
    <Routes>
      <Route path="category" element={<Category />} />
      <Route path="social" element={<Social />} />
      <Route path="menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
