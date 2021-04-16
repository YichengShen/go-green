import React from "react";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import BlurCircularRoundedIcon from "@material-ui/icons/BlurCircularRounded";
import theme from "../theme";
import Badge from "@material-ui/core/Badge";

const navTheme = createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      root: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: theme.palette.primary.contrastText,
        boxSizing: "border-box",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
        "&$selected": {
          color: theme.palette.secondary.light,
          "&:hover": {
            color: theme.palette.secondary.main,
          },
        },
      },
    },
  },
});

const BottomNav = (props) => {
  return (
    <MuiThemeProvider theme={navTheme}>
      <BottomNavigation
        value={props.pageValue}
        onChange={(event, newValue) => {
          props.onPageChange(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/check-in"
          label="Check-in"
          icon={
            <Badge color="secondary" variant="dot" invisible={false}>
              <CheckCircleRoundedIcon />
            </Badge>
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/badges"
          label="Badges"
          icon={<BlurCircularRoundedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/ranking"
          label="Ranking"
          icon={<FormatListNumberedRoundedIcon />}
        />
      </BottomNavigation>
    </MuiThemeProvider>
  );
};

export default BottomNav;
