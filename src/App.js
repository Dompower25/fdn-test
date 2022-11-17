import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainBlock from "./components/MainBlock";
import Content from "./components/Content";
import FooterBar from "./components/FooterBar";


function App() {
  return (
    <div className="App">
      <MainBlock />
      <Content />
      <FooterBar />
    </div>
  );
}

export default App;
