import React from "react";
// Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <PrivateRoute path={"/bubble-page"} component={BubblePage} />
    </Router>
  );
}

export default App;
