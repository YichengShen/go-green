import moment from "moment";

const startOfToday = () => {
  return moment.utc().startOf("day").toDate();
};

const aMonthAgo = () => {
  return moment.utc().startOf("day").subtract(1, "months").toDate();
};

export { aMonthAgo };
export default startOfToday;
