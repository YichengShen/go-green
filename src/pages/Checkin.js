import React from "react";
import Globe from "../components/Globe";
import DailySurvey from "../components/DailySurvey";
import pushNewSurvey from "../services/pushNewSurvey";
import checkSurveyCompleted from "../services/checkSurveyCompleted";

const Checkin = (props) => {
  const { setCheckinCompleted } = props;

  const [surveyCompleted, setSurveyCompleted] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function check() {
      try {
        setLoading(true);
        let response = await checkSurveyCompleted();
        setSurveyCompleted(response);
        setCheckinCompleted(response);
        setLoading(false);
      } catch (error) {
        // TODO: handle error
        setLoading(false);
        console.log(error);
      }
    }
    check();
  }, [setCheckinCompleted]);

  const [city, setCity] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [score, setScore] = React.useState("100");

  const [submitError, setSubmitError] = React.useState("");

  const handleSubmit = (e) => {
    setSubmitError("");

    // if Invalid city name
    if (coordinates.lat === null || coordinates.lng === null) {
      setSubmitError(
        "Failed to submit. Invalid city name. Please type in a city name and select from the suggestions below the input field."
      );
      return;
    }

    // Push the new survey to firestore
    const errorMsg = pushNewSurvey(city, coordinates, score);

    // if pushing to firestore fails
    if (errorMsg !== "") {
      setSubmitError(errorMsg);
      return;
    }

    setSurveyCompleted(true);
    props.setCheckinCompleted(surveyCompleted);
  };

  if (loading) return <span>Loading</span>;

  return (
    <React.Fragment>
      {!surveyCompleted ? (
        <DailySurvey
          city={city}
          setCity={setCity}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          level={score}
          setLevel={setScore}
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
