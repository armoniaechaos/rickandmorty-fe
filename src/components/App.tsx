import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterListPage from "./CharacterListPage/CharacterListPage";


export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterListPage />
        </Route>
        <Route path="/location/:locationId" children={<span />} />
      </Switch>
    </Router>
  );
}
