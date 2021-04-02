import React from "react";
import Globe from "../components/Globe";
import DailySurvey from "../components/DailySurvey";

const Checkin = (props) => {
  const [city, setCity] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const [surveyCompleted, setSurveyCompleted] = React.useState(false);

  const [submitError, setSubmitError] = React.useState(false);

  const handleSubmit = (e) => {
    setSubmitError(false);
    if (coordinates.lat === null || coordinates.lng === null) {
      setSubmitError(true);
      return;
    }
    // TODO: remove pring
    // store coordinates into database
    console.log(coordinates.lat, coordinates.lng);
    setSurveyCompleted(true);
  };

  return (
    <React.Fragment>
      {!surveyCompleted ? (
        <DailySurvey
          city={city}
          setCity={setCity}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          onSubmit={handleSubmit}
          submitError={submitError}
        />
      ) : (
        <Globe />
      )}
    </React.Fragment>
  );
};

export default Checkin;
