import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import LocalGasStationRoundedIcon from "@material-ui/icons/LocalGasStationRounded";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const SurveyHelperDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography color="secondary" variant="body2">
        Need help?
        <IconButton onClick={handleClickOpen}>
          <HelpIcon color="secondary" fontSize="small" />
        </IconButton>
      </Typography>

      <Dialog
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={"sm"}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "#2e2e2e",
            color: "white",
          },
        }}
      >
        <DialogTitle>Help</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You need to select a level that best describes the environmental
            friendliness of your commuting today. (Please be honest. The result
            is anonymous.)
          </Typography>
          <Typography gutterBottom color="secondary">
            <EcoRoundedIcon fontSize="small" /> Green: You commuted on foot, by
            bike, with electric vehicle, by public transportation...
          </Typography>
          <Typography gutterBottom color="error">
            <LocalGasStationRoundedIcon fontSize="small" /> Gasoline: You drove
            a fossil-fueled vehicle.
          </Typography>
          <Typography gutterBottom>
            In between green and gasoline, there are some intermediate levels
            that you can choose.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SurveyHelperDialog;
