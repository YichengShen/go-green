// TODO: Update this import
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: green[500],
    // },
    // secondary: {
    //   main: pink[500],
    // },
    primary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#fff",
    },
    secondary: {
      light: "#d7ffd9",
      main: "#a5d6a7",
      dark: "#75a478",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
