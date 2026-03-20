
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Page d'accueil */}
        <Route path="/login" element={<Login />} /> {/* Page de connexion */}
      </Routes>
    </Router>
  );
}

export default App;