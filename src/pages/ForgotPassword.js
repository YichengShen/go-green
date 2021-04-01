import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import green from "@material-ui/core/colors/green";
import { useAuth } from "../services/AuthContext";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  greenBoldText: {
    color: theme.palette.primary.main,
    fontWeight: "Bolder",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
  cancel: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: green[100],
  },
}));

const ForgotPassword = () => {
  const emailRef = React.useRef();

  const classes = useStyles();

  const { resetPassword } = useAuth();
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password. " + error.message);
    }

    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          className={classes.greenBoldText}
          component="h1"
          variant="h3"
        >
          GoGreen
        </Typography>
        <Avatar className={classes.avatar}>
          <EcoRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        {message && (
          <Alert severity="success">
            <AlertTitle>Reset Email Sent</AlertTitle>
            {message}
          </Alert>
        )}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset via Email
          </Button>
          <Button
            component={RouterLink}
            to="/login"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.cancel}
          >
            GO TO LOG IN
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
