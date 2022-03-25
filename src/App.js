import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import {HomePage ,LoginPage,SignupPage} from "./pages/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/mock" element={<Mockman />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
