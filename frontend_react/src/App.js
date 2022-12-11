import React from "react";

import { Footer, Header, Skills, Work } from "./container";

import "./App.scss";

import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />

      <Work />
      <Footer />
    </div>
  );
}

export default App;
