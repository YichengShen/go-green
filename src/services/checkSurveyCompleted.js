import firebase from "firebase/app";
import { firestore as db } from "./firebase";
import startOfToday from "../utils/startOfToday";

// Returns Boolean
const checkSurveyCompleted = async () => {
  // The current user
  const user = firebase.auth().currentUser;
  const uid = user.uid;

  let BreakException = {};

  // get all uid that have submitted the survey already
  return db
    .collection("surveys")
    .where("date", ">", startOfToday())
    .get()
    .then((querySnapshot) => {
      try {
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === uid) throw BreakException;
        });
      } catch (e) {
        if (e === BreakException) return true;
      }
      return false;
    });
};

export default checkSurveyCompleted;
