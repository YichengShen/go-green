import React from "react";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import { Box, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const headerTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: green[500],
        backgroundColor: green[50],
      },
    },
    MuiButton: {
      root: {
        position: "absolute",
        right: 10,
        color: green[500],
        backgroundColor: green[100],
        "&:hover": {
          color: green[700],
          backgroundColor: green[200],
        },
      },
    },
  },
});

const Header = () => {
  return (
    <MuiThemeProvider theme={headerTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <EcoRoundedIcon />
            <Box mr={1} />
            <Typography variant="h5">GoGreen</Typography>
          </IconButton>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default Header;
