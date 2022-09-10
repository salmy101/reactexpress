import React from "react";
import "./App.scss";
import { About, Header, Projects, Skills, Footer } from "./container/index";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    

      {/* <About />
      <Projects />
      <Skills />
      <Footer /> */}
    </div>
  );
};

export default App;
