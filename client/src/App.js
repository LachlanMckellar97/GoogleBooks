import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from './pages/Search';
import Jumbotron from "./components/Jumbotron";
import Saved from "./pages/Saved"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div style={{ marginLeft: 40, marginRight: 40, marginTop: 20 }} >
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;