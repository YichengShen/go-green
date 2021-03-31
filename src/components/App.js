import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Checkin from "../pages/Checkin";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item>
            <main>
              <Route path="/check-in">
                <Checkin />
              </Route>
              <Route path="/badges">badges</Route>
              <Route path="/ranking">ranking</Route>
              <Route exact path="/">
                home
              </Route>
            </main>
          </Grid>
          <Grid item xs={12}>
            <BottomNav />
          </Grid>
        </Grid>
      </Switch>
    </Router>
  );
};

export default App;
