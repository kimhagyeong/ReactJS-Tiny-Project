import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Prices from "../Screens/Prices";
import Exchanges from "../Screens/Exchanges";
import Coins from "../Screens/Coins";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Prices}></Route>
        <Route exact path="/exchanges" component={Exchanges}></Route>
        <Route exact path="/coins" component={Coins}></Route>
      </Switch>
    </Router>
  );
};
