import firebase from "firebase/app";
import { firestore } from "./firebase";
import capFirstLetter from "../utils/capFirstLetter";

const registerUserInfo = (firstName, lastName) => {
  // The user we just created
  const user = firebase.auth().currentUser;

  // Push a new user into database
  const newUser = {
    uid: user.uid,
    firstName: capFirstLetter(firstName),
    lastName: capFirstLetter(lastName),
  };
  firestore.collection("users").doc(user.uid).set(newUser);

  // Update display name of user
  return user.updateProfile({
    displayName: capFirstLetter(firstName),
  });
};

export default registerUserInfo;
