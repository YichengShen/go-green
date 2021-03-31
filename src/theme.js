// TODO: Update this import
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
