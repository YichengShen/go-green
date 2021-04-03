const scoreToColor = (score) => {
  if (score > 75) {
    return "green";
  } else if (score > 50) {
    return "gold";
  } else if (score > 25) {
    return "orange";
  } else {
    return "red";
  }
};

export default scoreToColor;
