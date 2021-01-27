import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from './styles/global.js'

import Main from './pages/Main/index.jsx'
import EditOrder from './pages/EditOrder/index.jsx'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/edit">
          <EditOrder />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);