import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route }  from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/_pages/Home";
import Products from "./components/_pages/Products";
import Services from "./components/_pages/Services";
import SignUp from "./components/_pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
