import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import { Box, Button } from "@material-ui/core";
import { useAuth } from "../services/AuthContext";
import AlertDialog from "./AlertDialog";
import theme from "../theme";

const headerTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.dark,
      },
    },
    MuiButton: {
      root: {
        position: "absolute",
        right: 10,
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
  },
});

const Header = () => {
  const [error, setError] = React.useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

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
          {currentUser === null ? (
            <Button component={Link} to="/login">
              LOG IN
            </Button>
          ) : (
            <React.Fragment>
              <Button onClick={handleLogout}>LOG OUT</Button>
              <AlertDialog
                open={alertOpen}
                onClose={handleCloseAlert}
                errorMsg={error}
              />
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default Header;
