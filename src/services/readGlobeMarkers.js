import { firestore as db } from "./firebase";
import startOfToday from "../utils/startOfToday";
import uniqueId from "../utils/uniqueId";
import scoreToColor from "../utils/scoreToColor";

const readGlobeMarkers = async () => {
  return db
    .collection("surveys")
    .where("date", ">", startOfToday())
    .get()
    .then((querySnapshot) => {
      var markers = {};
      querySnapshot.forEach((doc) => {
        let city = doc.data().city;
        let lat = doc.data().coordinates.lat;
        let lng = doc.data().coordinates.lng;
        let score = doc.data().score;
        if (markers.hasOwnProperty(city)) {
          markers[city] = {
            ...markers[city],
            sum: parseFloat(markers[city].sum) + parseFloat(score),
            count: parseFloat(markers[city].count) + 1,
          };
        } else {
          markers[city] = {
            id: uniqueId("marker"),
            city: city,
            color: "green",
            coordinates: [lat, lng],
            sum: parseFloat(score),
            count: 1,
          };
        }
      });
      const markersArray = [];
      Object.entries(markers).forEach(([k, v]) => {
        let score = Math.ceil(parseFloat(v.sum) / parseFloat(v.count));
        markersArray.push({
          id: v.id,
          city: v.city,
          color: scoreToColor(score),
          coordinates: v.coordinates,
          value: score,
        });
      });

      return markersArray;
    });
};

export default readGlobeMarkers;
