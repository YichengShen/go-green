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
import theme from "../theme";

const App = () => {
  const [pageValue, setPageValue] = React.useState(0);

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
                    <Route
                      path="/check-in"
                      render={(props) => <Checkin {...props} />}
                    />
                    <Route path="/badges">badges</Route>
                    <Route path="/ranking">ranking</Route>
                    <Route exact path="/">
                      home
                    </Route>
                  </main>
                </Grid>
                <Grid item xs={12}>
                  <BottomNav
                    pageValue={pageValue}
                    onPageChange={setPageValue}
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
