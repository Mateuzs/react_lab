import React from "react";

import { Header, Footer, Main } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header title={"HEADER"}></Header>
      <Main title={"MAIN"}></Main>
      <Footer title="FOOTER"></Footer>
    </div>
  );
};

export default App;

// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.tsx</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
