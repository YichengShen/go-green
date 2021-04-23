import React from "react";
import firebase from "../services/firebase"
import { firestore as db } from "../services/firebase";
import startOfToday from "../utils/startOfToday";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AvatarBadges from "../components/AvatarBadges";
import BadgesTest from "../components/AvatarBadges";
function twoDimensionArray(a, b) {
  let arr = [];
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }
  return arr;
}
function parse2DArray(array1, index) {
  var arrayOfItem = [];
  var i;
  if (typeof (array1[0][index]) == "number") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(parseInt(array1[i][index]));
    }
  }
  else if (typeof (array1[0][index]) == "string") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(String(array1[i][index]));
    }
  }
  else if (typeof (array1[0][index]) == "object") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(Object.values(array1[i][index])[0]);
    }
  }
  return arrayOfItem;
}
let publicurl = process.env.PUBLIC_URL;
let badgesArray = twoDimensionArray(4, 0);
let BadgeName = ["3daysConsective",
  "7daysConsecutive",
  "TotalMoreThan5days",
  "TodayTop",
  "TodayAboveAverage"];
let BadgeImages = [
  publicurl + "/assets/p4.png",//0
  publicurl + "/assets/p5.png",
  publicurl + "/assets/p3.png",
  publicurl + "/assets/p7.png",
  publicurl + "/assets/p6.png",
  publicurl + "/assets/p4_1.png",//5
  publicurl + "/assets/p5_1.png",
  publicurl + "/assets/p3_1.png",
  publicurl + "/assets/p7_1.png",
  publicurl + "/assets/p6_1.png",];
let BadgeExplanations = ["You have checked in for 3 consecutive days! ",
  "You have checked in for 7 consecutive days! ",
  "You have checked in for More than 5 days in total! ",
  "You get the top score for you today's transportation choice! Go Green!",
  "You performed above average! Thank you for your contribution to the environment"
];
var x;
for (x = 0; x < BadgeName.length; x++) {
  let temp = [];
  temp.push(BadgeName[x]);
  temp.push("BadgeImages");
  temp.push(BadgeExplanations[x]);
  temp.push(0);
  badgesArray.push(temp);
}//initalize status


const Badges = () => {
  var scores = [];
  var UserId = [];
  var AllScores = [];
  var AllUserId = [];
  var i;
  const CurrentUserID = firebase.auth().currentUser.uid;
  var AllData = twoDimensionArray(3, 0);
  //getting data
  const getAllScore = async () => {
    return db.collection("surveys")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var a = []
          a.push(parseInt(doc.data().score));
          a.push(String(doc.data().uid))
          a.push(doc.data().date)
          AllData.push(a);
        });
        return AllData;
      });
  }
  const getTodayScore = async () => {
    return db.collection("surveys")
      .where("date", ">", startOfToday())
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          scores.push(parseInt(doc.data().score));
        });
        return scores;
      });
  }
  const getTodayId = async () => {
    return db.collection("surveys")
      .where("date", ">", startOfToday())
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          UserId.push(String(doc.data().uid));
        });
        return UserId;
      });
  }
  //functions to qualify badges' conditions
  function checkin(AllData) {

    let TempTimeArray = parse2DArray(AllData, 2);
    let IdArray = parse2DArray(AllData, 1);
    let OnedaySeconds = 24 * 60 * 60;
    //let IndexArray = [];
    var i, x, max, countConsecutive;
    var countArray = [];
    var tempCountArray = [];
    var result = [];
    var TimeArray = [];
    for (i = 0; i < IdArray.length; i++) {
      if (IdArray[i] === CurrentUserID) {
        TimeArray.push(TempTimeArray[i]);
      }
    }
    countConsecutive = 1;
    for (x = 0; x < TimeArray.length; x++) {
      if (Math.abs(TimeArray[x] - TimeArray[x + 1]) <= OnedaySeconds) {
        countConsecutive = countConsecutive + 1;
      }
      else if (x + 1 == TimeArray.length) {
        tempCountArray.push(countConsecutive);
      }
      else {
        tempCountArray.push(countConsecutive);
        countConsecutive = 1; //reset countConsecutive
      }
    }
    max = Math.max.apply(null, tempCountArray);
    console.log("test", max);
    result.push(max, TimeArray.length);
    //first is consecutive login in days,
    // second is totol check in days.
    console.log(result);
    return result;
  }

  function AboveAvg(scores) {
    var arrSum = 0;
    var temp = 0
    for (i = 0; i < scores.length; i++) {
      arrSum = temp + scores[i]
    };
    let index = UserId.indexOf(CurrentUserID);
    if (index == null) {
      console.log("CurrentUser not found");
      return 0;
    }
    else {
      let topScore = scores.sort(function (a, b) { return a - b });
      if (scores[index] == topScore) {
        return 2;//top Score 
      }
      else if (scores.index >= arrSum) {
        return 1;//above average
      }
      else {
        return -1;//below average
      }
    }
  };
  function checkconsecutive(consecutive, array1) {
    if (consecutive < 3) {
      badgesArray[0][3] = 0;
      badgesArray[0][1] = BadgeImages[5];
      badgesArray[1][1] = BadgeImages[6];
    }
    else if (consecutive < 7 && consecutive >= 3) {
      badgesArray[0][3] = 1;
      badgesArray[0][1] = BadgeImages[0];
      badgesArray[1][1] = BadgeImages[6];
    }
    else if (consecutive >= 7) {
      badgesArray[0][3] = 1;
      badgesArray[1][3] = 1;
      badgesArray[0][1] = BadgeImages[5];
      badgesArray[1][1] = BadgeImages[1];
    }
  }

  function BadgeHandler() {
    switch (AboveAvg(scores)) {
      case 1:
        badgesArray[4][3] = 1;
        badgesArray[4][1] = BadgeImages[4];
        badgesArray[3][1] = BadgeImages[8];
        break;
      case -1:
        badgesArray[4][3] = 0;
        badgesArray[3][3] = 0;
        badgesArray[4][1] = BadgeImages[8];
        badgesArray[3][1] = BadgeImages[9];
        break;
      case 2:
        badgesArray[4][3] = 1;
        badgesArray[3][3] = 1;
        badgesArray[4][1] = BadgeImages[4];
        badgesArray[3][1] = BadgeImages[3];
        break;
    }
    let temp = checkin(AllData)
    let consecutive = temp[0];
    let total = temp[1];
    checkconsecutive(consecutive, badgesArray);
    if (total >= 5) {
      badgesArray[2][3] = 1;
      badgesArray[2][1] = BadgeImages[7];
    }
    else {
      badgesArray[2][1] = BadgeImages[2];
    }
    return badgesArray;
  }
var statusArray;

  React.useEffect(() => {
    async function check() {
      try {
        let c = await getTodayScore();
        let a = await getAllScore();
        let b = await getTodayId();
        let scores = Object.values(c);
        let UserId = Object.values(b);
        let AllData = Object.values(a);//return scores, userid, t(time)
         statusArray = BadgeHandler();
        console.log(statusArray);
      } catch (error) {
        console.log(error);
      }
    }
    check();
  }, []);
  console.log(statusArray);

  return (
    <React.Fragment>
      {statusArray.forEach(element => (
        <BadgesTest
          BadgeImageUrl={element[1]}
          BadgeExplanations={element[2]}
        />
      )) }
    </React.Fragment>

  )
};

export default Badges;




