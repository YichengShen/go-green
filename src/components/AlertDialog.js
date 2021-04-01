import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"ERROR"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.errorMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
