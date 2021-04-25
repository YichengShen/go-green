import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const AvatarBadge = (props) => {
  const { BadgeName, BadgeImageUrl, BadgeExplanations, BadgeStatus } = props;
  const classes = useStyles();

  return (
    <>
      <ListItem key={BadgeExplanations} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="BadgeImage" src={BadgeImageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
              >
                {BadgeExplanations}
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
