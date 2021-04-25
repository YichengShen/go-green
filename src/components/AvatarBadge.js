import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  avatarLarge: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(3),
  },
}));

const AvatarBadge = (props) => {
  const { badgeImageUrl, badgeExplanations, badgeActivated } = props;
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            className={classes.avatarLarge}
            alt="BadgeImage"
            src={badgeImageUrl}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography component="span" variant="h6">
                <span
                  style={
                    badgeActivated
                      ? {
                          fontWeight: "bold",
                          color: theme.palette.secondary.light,
                        }
                      : { fontWeight: "normal" }
                  }
                >
                  {badgeExplanations}
                </span>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default AvatarBadge;
