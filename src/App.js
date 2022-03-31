import "./App.css";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NotesPage, SignupPage } from "./pages/index";
import ProtectedRoute from "./Router/ProtectedRoute"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/mock" element={<Mockman />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      {/* Protected Routes */}
      <Route
        path="/notes"
        element={
          <ProtectedRoute ProtectedComp={
          <NotesPage />
        }></ProtectedRoute>
        }
      ></Route>
    </Routes>
    </div>
  );
}

export default App;
