import React from "react";
import "./main.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import {
  ArchivesPage,
  HomePage,
  LoginPage,
  NotesPage,
  SignupPage,
} from "../../pages";
import ProtectedRoute from "../../Router/ProtectedRoute";
import { Sidebar } from "../sidebar/Sidebar";
import { useHeader } from "../../context/header-context.js";

export const Main = () => {
  const { pathname } = useLocation();
  const forbiddenpaths = ["/", "/login", "/signup"];
  const { user } = useAuth();
  const { sidebar } = useHeader();
  return (
    <div className="main-content">
      {!forbiddenpaths.includes(pathname) && <Sidebar />}
      <div
        className={
          !forbiddenpaths[0].includes(pathname)
            ? sidebar
              ? "note-content note-hide"
              : "note-content "
            : ""
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!user.isUserLoggedIn && (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </>
          )}

          {/* Protected Routes */}
          <Route
            path="/notes"
            element={
              <ProtectedRoute ProtectedComp={<NotesPage />}></ProtectedRoute>
            }
          ></Route>
          <Route path="/archives" element={<ArchivesPage />}></Route>
          <Route path="/labels" element={<></>}></Route>
          <Route path="/trash" element={<></>}></Route>
          <Route path="/profile" element={<></>}></Route>
          <Route path="/*" element={<></>}></Route>
        </Routes>
      </div>
    </div>
  );
};
