// src/App.js

import React from "react";
import Main from "./Main";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Services";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Cart from "./Cart";

const Layout = () => {
  return (
    <>
      <Main />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
