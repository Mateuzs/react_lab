import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Footer, Main, DragContainer } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header title={"HEADER"} />
      <Router>
        <Switch>
          <Route path="/drag">
            <DragContainer />
          </Route>
          <Route path="/">
            <Main title={"MAIN"} />
          </Route>
        </Switch>
      </Router>
      <Footer title="FOOTER" />
    </div>
  );
};

export default App;
