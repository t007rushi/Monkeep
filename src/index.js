import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { ThemeProvider } from "./context/theme-context";
import { NotesProvider } from "./context/notes-context";
import { HeaderProvider } from "./context/header-context";
import { ArchiveProvider } from "./context/archive-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <HeaderProvider>
            <NotesProvider>
              <ArchiveProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </ArchiveProvider>
            </NotesProvider>
          </HeaderProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
