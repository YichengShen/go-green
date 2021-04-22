import { firestore as db } from "./firebase";

const readRankingData = async () => {
  return db
    .collection("surveys")
    .get()
    .then((querySnapshot) => {
      var cityDict = {};
      querySnapshot.forEach((doc) => {
        let city = doc.data().city;
        let score = doc.data().score;
        if (cityDict.hasOwnProperty(city)) {
          cityDict[city] = {
            ...cityDict[city],
            sum: parseFloat(cityDict[city].sum) + parseFloat(score),
            count: parseFloat(cityDict[city].count) + 1,
          };
        } else {
          cityDict[city] = {
            city: city,
            sum: parseFloat(score),
            count: 1,
          };
        }
      });

      var cityArray = [];
      Object.entries(cityDict).forEach(([k, v]) => {
        let score = Math.ceil(parseFloat(v.sum) / parseFloat(v.count));
        cityArray.push({
          city: v.city,
          score: score,
          userCount: v.count,
        });
      });
      return cityArray;
    });
};

export default readRankingData;
