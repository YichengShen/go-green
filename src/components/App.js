import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Checkin from "../pages/Checkin";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item>
            <main>
              <Switch>
                <Route path="/check-in">
                  <Checkin />
                </Route>
                <Route path="/badges">badges</Route>
                <Route path="/ranking">ranking</Route>
                <Route path="/">home</Route>
              </Switch>
            </main>
          </Grid>
        </Grid>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
