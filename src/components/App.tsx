import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <span>placeholder</span>
        </Route>
        <Route path="/location/:locationId" children={<span />} />
      </Switch>
    </Router>
  );
}
