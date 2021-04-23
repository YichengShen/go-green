import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "../theme";
import { Link } from "react-router-dom";
import {
  GiPineTree,
  GiFruitTree,
  GiPalmTree,
  GiTreeBranch,
  GiPaperWindmill,
  GiFairyWings,
  GiFairyWand,
} from "react-icons/gi";
import { FiWind } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const buttonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        marginTop: theme.spacing(1),
        "&:hover": {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.secondary.light,
          fontWeight: "bold",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: "25px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperGrey: {
    backgroundColor: theme.palette.primary.light,
  },
  paperBlack: {
    backgroundColor: theme.palette.secondary.contrastText,
  },
  greenBold: {
    color: theme.palette.secondary.light,
    fontWeight: "bolder",
    marginBottom: "20px",
  },
  whiteBold: {
    color: theme.palette.primary.contrastText,
    fontWeight: "bolder",
    marginBottom: "20px",
  },
  whiteText: {
    color: theme.palette.primary.contrastText,
  },
  alignRight: {
    textAlign: "right",
    marginRight: theme.spacing(5),
  },
  alignLeft: {
    textAlign: "left",
    marginLeft: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={false} />
        <Grid item xs={12}>
          <img
            style={{ top: "-500px", width: "100%" }}
            src={process.env.PUBLIC_URL + "/img/logoCombined.png"}
            alt="logo"
          />

          <motion.div
            animate={{ y: -10, opacity: 1 }}
            transition={{
              delay: 1,
              y: {
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                stiffness: 100,
              },
            }}
          >
            <div style={{ color: "white", textAlign: "center" }}>
              <ExpandMoreIcon fontSize="large" />
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={false} />
      </Grid>

      <Box mb={3} />

      <Grid container direction="row">
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          {/* MISSION */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            style={{ color: "white" }}
          >
            <Paper className={`${classes.paper} ${classes.paperBlack}`}>
              <Typography
                className={classes.greenBold}
                variant="h3"
                component="h1"
              >
                Our Mission
              </Typography>
              <Typography className={classes.whiteText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              </Typography>
              <MuiThemeProvider theme={buttonTheme}>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button size="large">Join Us</Button>
                </Link>
              </MuiThemeProvider>
            </Paper>
          </div>

          {/* About Env Racism */}
          <Grid container direction="row">
            <Grid item xs={12} md={6}>
              <div data-aos="fade-right" data-aos-easing="linear">
                <Paper className={classes.paperBlack}>
                  <Typography
                    className={`${classes.greenBold} ${classes.alignRight}`}
                    variant="h3"
                    component="h1"
                  >
                    About Environmental Racism
                    <br />
                    <span
                      data-aos="fade-right"
                      data-aos-delay="2500"
                      data-aos-easing="linear"
                    >
                      <GiPineTree />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="2000"
                      data-aos-easing="linear"
                    >
                      <GiFruitTree />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="1500"
                      data-aos-easing="linear"
                    >
                      <GiPalmTree />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      data-aos-easing="linear"
                    >
                      <GiTreeBranch />
                    </span>
                  </Typography>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div data-aos="fade-left" data-aos-easing="linear">
                <Typography className={classes.whiteText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Box mb={6} />

          {/* About Air Quality */}
          <Grid container direction="row">
            <Grid item xs={6}>
              <div data-aos="fade-right" data-aos-easing="linear">
                <Typography className={classes.whiteText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div data-aos="fade-left" data-aos-easing="linear">
                <Paper className={classes.paperBlack}>
                  <Typography
                    className={`${classes.greenBold} ${classes.alignLeft}`}
                    variant="h3"
                    component="h1"
                  >
                    About <br /> Air Quality
                    <br />
                    <span
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      data-aos-easing="linear"
                    >
                      <GiPaperWindmill />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="1500"
                      data-aos-easing="linear"
                    >
                      <GiFairyWings />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="2000"
                      data-aos-easing="linear"
                    >
                      <GiFairyWand />
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-right"
                      data-aos-delay="2500"
                      data-aos-easing="linear"
                    >
                      <FiWind />
                    </span>
                    &nbsp;
                  </Typography>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} sm={2} />
      </Grid>
      <Box mb={10} />
    </>
  );
};

export default Home;
