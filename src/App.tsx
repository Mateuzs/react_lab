import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer, Home, DragContainer } from "./components";

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
          <Route path="/">
            <Home title={"HOME"} />
          </Route>
        </Switch>
        <Footer title="FOOTER" />
      </Router>
    </div>
  );
};

export default App;
