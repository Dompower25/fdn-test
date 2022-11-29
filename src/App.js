import React from "react";
import "./App.css";

import { FooterBar, MainBlock, HeaderBar } from "./components";

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
