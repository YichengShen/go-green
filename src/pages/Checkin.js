import React from "react";
import Globe from "../components/Globe";
import DailySurvey from "../components/DailySurvey";

const Checkin = (props) => {
  return (
    <React.Fragment>
      {!props.surveyCompleted ? (
        <DailySurvey onSubmit={props.onSurveySubmit} />
      ) : (
        <Globe />
      )}
    </React.Fragment>
  );
};

export default Checkin;
