import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Redirects from "./pages/Redirects";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <div className="global">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:slug" element={<Redirects />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);