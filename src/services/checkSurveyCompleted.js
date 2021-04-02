import firebase from "firebase/app";
import { firestore as db } from "./firebase";
import startOfToday from "../utils/startOfToday";

// Returns Boolean
const checkSurveyCompleted = async () => {
  // The current user
  const user = firebase.auth().currentUser;
  const uid = user.uid;

  // get all uid that have submitted the survey already
  await db
    .collection("surveys")
    .where("date", ">", startOfToday())
    .onSnapshot((querySnapshot) => {
      var uidArray = [];
      querySnapshot.forEach((doc) => {
        uidArray.push(doc.data().uid);
      });
      if (uidArray.includes(uid)) {
        return true;
      }

      return false;
    });
};

export default checkSurveyCompleted;
