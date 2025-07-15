import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Category } from "./components/Category";

function App() {
  return (
    <Routes>
      <Route path="category" element={<Category />} />
    </Routes>
  );
}

export default App;
