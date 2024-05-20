// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import EditNotePage from "./pages/EditNotePage";
import CreateNotePage from "./pages/CreateNotePage";
import GrammarCheckPage from "./pages/GrammarCheckPage";
import Navbar from "./components/layout/Navbar"; 
import "./reset.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/edit/:id" element={<EditNotePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/check/:id" element={<GrammarCheckPage />} />
      </Routes>
    </Router>
  );
};

export default App;


// TODO
// 1. Backend done
// 