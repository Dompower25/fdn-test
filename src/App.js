import React from "react";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import MainBlock from "./components/MainBlock";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <MainBlock />
      <FooterBar />
    </div>
  );
}

export default App;
