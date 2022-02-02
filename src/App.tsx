import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative">
      <Router>
        <Route exact path={"/"} component={Home} />
      </Router>
    </div>
  );
}

export default App;
