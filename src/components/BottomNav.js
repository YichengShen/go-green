import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { green } from "@material-ui/core/colors";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import BlurCircularRoundedIcon from "@material-ui/icons/BlurCircularRounded";

const navTheme = createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      root: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#e8f5e9",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        "&:hover": {
          color: green[700],
        },
        "&$selected": {
          color: green[400],
          "&:hover": {
            color: green[700],
          },
        },
      },
    },
  },
});

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <MuiThemeProvider theme={navTheme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction
          label="Check-in"
          icon={<CheckCircleRoundedIcon />}
        />
        <BottomNavigationAction
          label="Badges"
          icon={<BlurCircularRoundedIcon />}
        />
        <BottomNavigationAction
          label="Ranking"
          icon={<FormatListNumberedRoundedIcon />}
        />
      </BottomNavigation>
    </MuiThemeProvider>
  );
};

export default BottomNav;
