import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { green, red } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "../theme";
import CityInputField from "./CityInputField";
import Alert from "@material-ui/lab/Alert";
import LocalGasStationRoundedIcon from "@material-ui/icons/LocalGasStationRounded";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";

const surveyTheme = createMuiTheme({
  palette: {
    secondary: { main: theme.palette.secondary.main },
  },
  overrides: {
    MuiToggleButtonGroup: {
      root: {
        padding: "2px 5px",
        borderRadius: "15px",
        backgroundImage: `linear-gradient(${green[500]}, ${red[300]})`,
      },
    },
    MuiToggleButton: {
      sizeLarge: {
        padding: "15px 45px",
      },
      root: {
        color: "white",
        backgroundColor: "rgba(0, 0, 0, .5)",
        fontWeight: "lighter",
        margin: "3px 0",
        // padding: "10px 20px",
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
    MuiButton: {
      root: {
        backgroundColor: "rgba(255, 255, 255, .2)",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.mainLight,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
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

const DailySurvey = (props, theme) => {
  const classes = useStyles();

  const {
    city,
    setCity,
    coordinates,
    setCoordinates,
    level,
    setLevel,
    onSubmit,
    submitError,
  } = props;

  const handleChange = (event, newLevel) => {
    if (newLevel !== null) {
      setLevel(newLevel);
    }
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

            <CityInputField
              city={city}
              onSetCity={setCity}
              coordinates={coordinates}
              onSetCoordinates={setCoordinates}
            />

            <Box mt={2} />
            <Typography color="secondary">
              How did you commute today?
            </Typography>
            <Typography color="secondary">Select a level below.</Typography>
            <ToggleButtonGroup
              orientation="vertical"
              value={level}
              size="large"
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="100" aria-label="All Green">
                <EcoRoundedIcon /> Green
              </ToggleButton>
              <ToggleButton value="75" aria-label="Mostly Green">
                Mostly Green
              </ToggleButton>
              <ToggleButton value="50" aria-label="Half">
                Half <EcoRoundedIcon /> Half <LocalGasStationRoundedIcon />
              </ToggleButton>
              <ToggleButton value="25" aria-label="Mostly Gasoline">
                Mostly Gasoline
              </ToggleButton>
              <ToggleButton value="0" aria-label="All Gasoline">
                <LocalGasStationRoundedIcon /> Gasoline
              </ToggleButton>
            </ToggleButtonGroup>

            <Box mt={2} />
            <Button color="secondary" onClick={onSubmit}>
              Submit
            </Button>
            {submitError !== "" && (
              <>
                <Box mt={2} />
                <Alert severity="error" style={{ width: "80%" }}>
                  Failed to submit. Invalid city name. Please type in a city
                  name and select from the suggestions below the input field.
                </Alert>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={1} sm={2} md={3} />
      </Grid>
    </MuiThemeProvider>
  );
};

export default DailySurvey;
