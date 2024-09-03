import React from "react";
import Home from "../../pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SidebarCall from "../constant/SidebarCall"; 

export default function Navigation() {
  return (
    <Router>
      <div>
        <SidebarCall />
        <ul>
          
        </ul>

        <Routes>
          <Route path="/" 
          element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}
