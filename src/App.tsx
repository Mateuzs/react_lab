import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Header,
  Footer,
  Home,
  DragContainer,
  BrowserCompatibility,
  ApiCalls,
  ApplicationPerformance,
} from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header title={"HEADER"} />
        <Switch>
          <Route path="/drag">
            <DragContainer />
          </Route>
          <Route path="/api-calls">
            <ApiCalls />
          </Route>
          <Route path="/browser-compatibility">
            <BrowserCompatibility />
          </Route>
          <Route path="/application-performance">
            <ApplicationPerformance />
          </Route>
          <Route path="/">
            <Home title={"HOME"} />
          </Route>
        </Switch>
        <Footer
          title={`Proudly Crafted By Mateusz, version ${
            require("../package.json").version
          }`}
        />
      </Router>
    </div>
  );
};

export default App;
