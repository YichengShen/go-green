import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import BottomNav from "./BottomNav";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Grid container direction="column">
          <Grid item xs={12}>
            {/* <Header onSearch={handleSearch} /> */}
          </Grid>
          <Grid item>
            <main>
              <Switch>
                <Route path="/">
                  {/* <Home searchKeyword={searchInput} /> */}
                </Route>
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
