import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Checkin from "../pages/Checkin";
import { AuthProvider } from "../services/AuthContext";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <React.Fragment>
            <Grid container direction="column">
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item>
                <main>
                  <Route path="/check-in" component={Checkin} />
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
          </React.Fragment>
        </Switch>
      </AuthProvider>{" "}
    </Router>
  );
};

export default App;
