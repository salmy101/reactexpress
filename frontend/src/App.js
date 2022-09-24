import React from "react";
import "./App.scss";
import { About, Header, Projects, Skills, Footer } from "./container/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Skills />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
