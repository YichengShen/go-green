import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { green, red } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const surveyTheme = createMuiTheme({
  overrides: {
    MuiToggleButtonGroup: {
      root: {
        padding: "2px 5px",
        borderRadius: "15px",
        backgroundImage: `linear-gradient(${green[500]}, ${red[300]})`,
      },
    },
    MuiToggleButton: {
      root: {
        color: "white",
        backgroundColor: "rgba(0, 0, 0, .5)",
        fontWeight: "lighter",
        margin: "3px 0",
        borderRadius: 10,
        "&:hover": {
          color: "black",
          backgroundColor: "rgba(255, 255, 255, .4)",
        },
        "&$selected": {
          color: "black",
          backgroundColor: "rgba(255, 255, 255, .8)",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, .4)",
          },
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(8),
    padding: "30px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  greenBold: {
    color: theme.palette.secondary.light,
    fontWeight: "bolder",
    marginBottom: "20px",
  },
}));

const DailySurvey = (theme) => {
  const classes = useStyles();

  const [level, setLevel] = React.useState("100");

  const handleChange = (event, nextLevel) => {
    setLevel(nextLevel);
  };

  return (
    <MuiThemeProvider theme={surveyTheme}>
      <Grid container>
        <Grid item xs={1} sm={2} md={3} />
        <Grid item xs={10} sm={8} md={6}>
          <Paper className={classes.paper} elevation={10}>
            <Typography
              className={classes.greenBold}
              variant="h5"
              component="h1"
            >
              Today's Check-in
            </Typography>
            <ToggleButtonGroup
              orientation="vertical"
              value={level}
              size="large"
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="100" aria-label="All Green">
                100% Green
              </ToggleButton>
              <ToggleButton value="75" aria-label="Mostly Green">
                75% Green + 25% Gasoline
              </ToggleButton>
              <ToggleButton value="50" aria-label="Half">
                50% Green + 50% Gasoline
              </ToggleButton>
              <ToggleButton value="25" aria-label="Mostly Gasoline">
                25% Green + 75% Gasoline
              </ToggleButton>
              <ToggleButton value="0" aria-label="All Gasoline">
                100% Gasoline
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={2} md={3} />
      </Grid>
    </MuiThemeProvider>
  );
};

export default DailySurvey;
