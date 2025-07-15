import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Category } from "./components/Category";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="category" element={<Category />} />
    </Routes>
  );
}

export default App;
