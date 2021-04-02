import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
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
import { useAuth } from "../services/AuthContext";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.contrastText,
  },
  greenBoldText: {
    color: theme.palette.secondary.light,
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
    backgroundColor: "grey",
  },

  cssLabel: {
    color: `${theme.palette.secondary.light} !important`,
  },
  cssInput: {
    color: `${theme.palette.primary.contrastText} !important`,
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.secondary.light} !important`,
    },
  },
  cssFocused: {
    color: `${theme.palette.secondary.light} !important`,
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: `${theme.palette.secondary.light} !important`,
  },
}));

const Login = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const classes = useStyles();

  const { login } = useAuth();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box p={2} />
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
          Log in
        </Typography>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
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
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.cssInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: "numeric",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.cssInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: "numeric",
            }}
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Button
            component={RouterLink}
            to="/"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.cancel}
          >
            Cancel
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                component={RouterLink}
                to="/forgot-password"
                variant="body2"
                color="secondary"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/signup"
                variant="body2"
                color="secondary"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
