import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-bg">
        <div className="site-wrap">
          <main>
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/join" element={<JoinUs />} />
              {/* you can add placeholder routes for /about /events /team if you want */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
