import React from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Services from "./views/Services";
import Inquiries from "./views/Inquiries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    //react router
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/index" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/inquiries" element={<Inquiries/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
