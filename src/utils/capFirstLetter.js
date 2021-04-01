const capFirstLetter = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substring(1).toLowerCase();
};

export default capFirstLetter;
