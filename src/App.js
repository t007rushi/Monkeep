import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
