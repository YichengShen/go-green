import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const BadgesTest = (props) => {
  const { BadgeName, BadgeImageUrl, BadgeExplanations, BadgeStatus } = props;

  return (
    <>
      <ListItem key={BadgeExplanations} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="BadgeImage" src={BadgeImageUrl} />
        </ListItemAvatar>
        <ListItemText primary={BadgeExplanations} />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default BadgesTest;
