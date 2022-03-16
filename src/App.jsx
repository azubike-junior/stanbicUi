import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StanbicLogin from "./pages/StanbicLogin";
import StanbicWelcome from "./pages/StanbicWelcome";

function App() {
  return (
    <div className="relative">
      <Router>
        <Route exact path={"/"} component={StanbicLogin} />
        <Route exact path={"/welcome"} component={StanbicWelcome} />
      </Router>
    </div>
  );
}

export default App;
