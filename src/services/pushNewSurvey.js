import firebase from "firebase/app";
import { firestore as db } from "./firebase";

// Returns error message or empty string (success)
const pushNewSurvey = (city, coordinates, score) => {
  // The current user
  const user = firebase.auth().currentUser;

  // Push a new user into database
  const newSurvey = {
    uid: user.uid,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    city: city,
    coordinates: {
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
    score: score,
  };
  db.collection("surveys")
    .add(newSurvey)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      return error.message;
    });
  return "";
};

export default pushNewSurvey;
