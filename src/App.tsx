import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Category } from "./components/Category";
import { Social } from "./components/Social";

function App() {
  return (
    <Routes>
      <Route path="category" element={<Category />} />
       <Route path="social" element={<Social />} />
    </Routes>
  );
}

export default App;
