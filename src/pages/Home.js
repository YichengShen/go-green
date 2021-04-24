import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
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
import { BsChevronDoubleDown } from "react-icons/bs";

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
            animate={{ y: -20, opacity: 1 }}
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
              <Typography variant="h3">
                <BsChevronDoubleDown />
              </Typography>
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
              <Typography
                className={classes.whiteText}
                variant="h6"
                component="div"
              >
                Welcome to the GoGreen App! We are a group of students at Boston
                College who are passionate about addressing environmental
                issues. In this modern society, we, as human beings, consume the
                environment continuously, but we often are not aware of how our
                actions affect the global environment and influence others’
                lives, which is a factor causing environmental racism. We create
                the GoGreen App to promote people’s awareness of their daily
                environmental footprints, visualize footprints of users from all
                over the world, and encourage “green” actions through our reward
                badges and ranking system. We believe that our app will make
                people care more the environment from daily actions and spread a
                positive vibe of protecting the environment. Come join us today!
              </Typography>
              <MuiThemeProvider theme={buttonTheme}>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button size="large">Join Us</Button>
                </Link>
              </MuiThemeProvider>
            </Paper>
          </div>

          {/* GOALS */}
          <div data-aos="fade-up" data-aos-easing="linear">
            <Paper className={`${classes.paper} ${classes.paperBlack}`}>
              <Typography
                className={classes.whiteBold}
                variant="h3"
                component="h1"
              >
                Our Goals
              </Typography>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-easing="linear"
                  >
                    <img
                      style={{ width: "100%" }}
                      src={process.env.PUBLIC_URL + "/img/goal1.png"}
                      alt="goal1"
                    />
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <span
                    data-aos="fade"
                    data-aos-delay="800"
                    data-aos-easing="linear"
                  >
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={process.env.PUBLIC_URL + "/img/goal2.png"}
                      alt="goal2"
                    />
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <span
                    data-aos="fade"
                    data-aos-delay="1200"
                    data-aos-easing="linear"
                  >
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={process.env.PUBLIC_URL + "/img/goal3.png"}
                      alt="goal3"
                    />
                  </span>
                </Grid>
              </Grid>
            </Paper>
          </div>

          <Box mb={6} />

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
                <Typography
                  className={classes.whiteText}
                  variant="h6"
                  component="div"
                >
                  Environmental racism is a form of systematic racism where
                  communities of color are disproportionately burdened with
                  health hazards through other communities’ policies that force
                  them to live in areas close to sources of toxic waste such as
                  sewage works, mines, landfills, power stations, major roads,
                  and emitters of airborne particulate. As a result, these minor
                  communities suffer greater rates of health problems attendant
                  on hazardous pollutants. Research results show that, African
                  Americans were five times more likely to have lead poisoning
                  from proximity to waste than caucasian children. Even African
                  Americans who have higher salaries than White Americans are
                  more likely to live in polluted areas. GoGreen aims to improve
                  air quality as an aid to those who live in places with air
                  pollution.
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Box mb={6} />

          {/* About Air Quality */}
          <Grid container direction="row">
            <Grid item xs={6}>
              <div data-aos="fade-right" data-aos-easing="linear">
                <Typography
                  className={classes.whiteText}
                  variant="h6"
                  component="div"
                >
                  Our app specifically targets air pollution caused by carbon
                  emission. Currently, some communities are disproportionately
                  impacted by air pollution. Low-income and color communities
                  face the largest impact from air pollution. In the U.S.,
                  people of color are 1.5 times more likely to live in an area
                  with poor air quality than their white counterparts. People’s
                  awareness of this issue is the key to reduce carbon emission
                  so that the air quality in those impacted areas can be
                  improved. Our app will promote green transportation methods to
                  reduce carbon emission and protect the environment.
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
          <div
            style={{ color: theme.palette.secondary.dark, textAlign: "right" }}
          >
            Copyright &copy; 2021 GoGreen.
          </div>
        </Grid>

        <Grid item xs={1} sm={2} />
      </Grid>
      <Box mb={12} />
    </>
  );
};

export default Home;
