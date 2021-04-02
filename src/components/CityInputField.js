import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
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

  autocompleteResults: {
    padding: "2px",
  },
}));

const CityInputField = (props) => {
  const classes = useStyles();

  const { city, onSetCity, coordinates, onSetCoordinates } = props;

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    onSetCity(value);
    onSetCoordinates(latLng);
  };

  const searchOptions = {
    types: ["(cities)"],
  };

  return (
    <React.Fragment>
      <Typography color="secondary">
        Which city are you currently in?
      </Typography>

      <PlacesAutoComplete
        value={city}
        onChange={onSetCity}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              {...getInputProps({ placeholder: "Type then select city" })}
              error={coordinates.lat === null || coordinates.lng === null}
              variant="outlined"
              margin="dense"
              required
              id="city"
              label="City"
              name="city"
              autoComplete="off"
              autoFocus
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
            <div>
              {loading ? (
                <div style={{ color: "white" }}>...loading</div>
              ) : (
                <>
                  {!suggestions.length ? null : (
                    <Paper
                      elevation={0}
                      className={classes.autocompleteResults}
                    >
                      {suggestions.map((suggestion, index) => {
                        const style = {
                          color: theme.palette.primary.contrastText,
                          backgroundColor: suggestion.active
                            ? theme.palette.secondary.main
                            : theme.palette.primary.main,
                        };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestion, { style })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </Paper>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </PlacesAutoComplete>
    </React.Fragment>
  );
};

export default CityInputField;
