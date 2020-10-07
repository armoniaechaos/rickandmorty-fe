import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import LocationInfoPage from "./LocationInfoPage/LocationInfoPage";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterListPage />
        </Route>
        <Route path="/location/:locationId" children={<LocationInfoPage />} />
      </Switch>
    </Router>
  );
}
