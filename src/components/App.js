import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Checkin from "../pages/Checkin";
import Badges from "../pages/Badges";
import Ranking from "../pages/Ranking";
import { AuthProvider } from "../services/AuthContext";
import PrivateRoute from "./PrivateRoute";
import theme from "../theme";

const App = () => {
  const [pageValue, setPageValue] = React.useState(0);
  const [checkinCompleted, setCheckinCompleted] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        height: "100%",
        overflow: "auto",
      }}
    >
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
                    <PrivateRoute
                      path="/check-in"
                      component={Checkin}
                      setCheckinCompleted={setCheckinCompleted}
                    />

                    <PrivateRoute path="/badges" component={Badges} />

                    <PrivateRoute path="/ranking" component={Ranking} />

                    <Route exact path="/">
                      home
                    </Route>
                  </main>
                </Grid>
                <Grid item xs={12}>
                  <BottomNav
                    pageValue={pageValue}
                    onPageChange={setPageValue}
                    checkinCompleted={checkinCompleted}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          </Switch>
        </AuthProvider>{" "}
      </Router>
    </div>
  );
};

export default App;
