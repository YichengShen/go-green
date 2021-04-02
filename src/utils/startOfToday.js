import moment from "moment";

const startOfToday = () => {
  return moment.utc().startOf("day").toDate();
};

export default startOfToday;
