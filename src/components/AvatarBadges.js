import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "../theme";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


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




const BadgesTest = (props, theme) => {

    const classes = useStyles();
    const {
        BadgeName,
        BadgeImageUrl,
        BadgeExplanations,
        BadgeStatus,
    } = props;



    return (
        <MuiThemeProvider theme={surveyTheme}>
            <Grid container>
                <Grid item xs={1} sm={2} md={3} />
                <Grid item xs={10} sm={8} md={6}>
                    <List className={classes.root}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="BadgeImage" src= {BadgeImageUrl} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={BadgeExplanations}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                    </List>
                </Grid>
                <Grid item xs={1} sm={2} md={3} />
            </Grid>
        </MuiThemeProvider>
    );
};

export default BadgesTest;
