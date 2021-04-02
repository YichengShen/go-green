import React from "react";
import Globe from "../components/Globe";
import DailySurvey from "../components/DailySurvey";

const Checkin = () => {
  const [surveyCompleted, setSurveyCompleted] = React.useState(false);

  return (
    <React.Fragment>
      {!surveyCompleted ? <DailySurvey /> : <Globe />}
    </React.Fragment>
  );
};

export default Checkin;
