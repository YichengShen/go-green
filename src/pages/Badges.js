import React, { useState } from "react";
import firebase from "../services/firebase";
import { firestore as db } from "../services/firebase";
import startOfToday from "../utils/startOfToday";
import { Paper, Grid, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";
import BadgesTest from "../components/AvatarBadges";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
    padding: "30px 0px",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  greenBold: {
    color: theme.palette.secondary.light,
    fontWeight: "bolder",
    marginBottom: "20px",
  },
}));

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
  if (typeof array1[0][index] == "number") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(parseInt(array1[i][index]));
    }
  } else if (typeof array1[0][index] == "string") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(String(array1[i][index]));
    }
  } else if (typeof array1[0][index] == "object") {
    for (i = 0; i < array1.length; i++) {
      arrayOfItem.push(Object.values(array1[i][index])[0]);
    }
  }
  return arrayOfItem;
}
let publicurl = process.env.PUBLIC_URL;
let badgesArray = twoDimensionArray(4, 0);
let BadgeName = [
  "3daysConsective",
  "7daysConsecutive",
  "TotalMoreThan5days",
  "TodayTop",
  "TodayAboveAverage",
  "CityWideAboveAverageToday",
  "CityWideTopToda"
];
let BadgeImages = [
  publicurl + "/assets/p4.png", //0
  publicurl + "/assets/p5.png",
  publicurl + "/assets/p3.png",
  publicurl + "/assets/p7.png",
  publicurl + "/assets/p6.png",
  publicurl + "/assets/p4_1.png", //5
  publicurl + "/assets/p5_1.png",
  publicurl + "/assets/p3_1.png",
  publicurl + "/assets/p7_1.png",
  publicurl + "/assets/p6_1.png",
  publicurl + "/assets/p1.png",//10
  publicurl + "/assets/p1.png",
  publicurl + "/assets/p2.png",
  publicurl + "/assets/p2_1.png",


];
let BadgeExplanations = [
  "You have checked in for 3 consecutive days! ",//0
  "You have checked in for 7 consecutive days! ",
  "You have checked in for More than 5 days in total! ",
  "You got the top score for you today's transportation choice among users across the world! Go Green!",
  "You performed above average worldwide! Thank you for your contribution to the environment!",
  "You performed above average in your city today!",//5
  "You got the top score for your today's transportation choice in your city!",//6
];
var x;
for (x = 0; x < BadgeName.length; x++) {
  let temp = [];
  temp.push(BadgeName[x]);
  temp.push("BadgeImages");
  temp.push(BadgeExplanations[x]);
  temp.push(0);
  badgesArray.push(temp);
} //initalize status


const Badges = () => {
  const classes = useStyles();

  var i;
  var UserId = [];
  const [scores, setScores] = useState([]);
  const [userId, setUserId] = useState([]);
  const CurrentUserID = firebase.auth().currentUser.uid;
  var AllData = twoDimensionArray(4, 0);
  //getting data
  const getAllScore = async () => {
    return db
      .collection("surveys")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var a = [];
          a.push(parseInt(doc.data().score));
          a.push(String(doc.data().uid));
          a.push(doc.data().date);
          a.push(String(doc.data().city))
          AllData.push(a);
        });
        return AllData;
      });
  };
  const getTodayScore = async () => {
    return db
      .collection("surveys")
      .where("date", ">", startOfToday())
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          scores.push(parseInt(doc.data().score));
        });
        return scores;
      });
  };
  const getTodayId = async () => {
    return db
      .collection("surveys")
      .where("date", ">", startOfToday())
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          UserId.push(String(doc.data().uid));
        });
        return UserId;
      });
  };
  //functions to qualify badges' conditions
  function checkin(AllData) {
    let TempTimeArray = parse2DArray(AllData, 2);
    let IdArray = parse2DArray(AllData, 1);
    let OnedaySeconds = 24 * 60 * 60;
    //let IndexArray = [];
    var i, x, max, countConsecutive;
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
      } else if (x + 1 === TimeArray.length) {
        tempCountArray.push(countConsecutive);
      } else {
        tempCountArray.push(countConsecutive);
        countConsecutive = 1; //reset countConsecutive
      }
    }
    max = Math.max.apply(null, tempCountArray);
    result.push(max, TimeArray.length);
    //first is consecutive login in days,
    // second is totol check in days.
    return result;
  }
  function cityWideEvaluation(arr,CurrentUserScore) {
    let cityList = parse2DArray(arr, 3);
    let index = UserId.indexOf(CurrentUserID);
    let userCity = cityList[index];
    var TempScoresArray = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i][3] === userCity) {
        TempScoresArray.push(arr[i][0]);
      }
    }
    return AboveAvg(TempScoresArray,CurrentUserScore);
  }//return an Int;

  function currentUserScore(scores) {
    let index = UserId.indexOf(CurrentUserID);
    return scores[index];
  }

  function AboveAvg(scores, CurrentUserScore) {
    var arrSum = 0;
    var temp = 0;
    for (i = 0; i < scores.length; i++) {
      arrSum = temp + scores[i];
    }
    var avg = arrSum / scores.length;
    let topScore = Math.max(...scores);
    if (CurrentUserScore === topScore) {
      return 2; //top Score
    } else if (CurrentUserScore >= avg && CurrentUserScore !== topScore) {
      return 1; //above average
    } else {
      return -1; //below average
    }
  }
  function checkconsecutive(consecutive, array1) {
    if (consecutive < 3) {
      badgesArray[0][3] = 0;
      badgesArray[0][1] = BadgeImages[5];
      badgesArray[1][1] = BadgeImages[6];
    } else if (consecutive < 7 && consecutive >= 3) {
      badgesArray[0][3] = 1;
      badgesArray[0][1] = BadgeImages[0];
      badgesArray[1][1] = BadgeImages[6];
    } else if (consecutive >= 7) {
      badgesArray[0][3] = 1;
      badgesArray[1][3] = 1;
      badgesArray[0][1] = BadgeImages[5];
      badgesArray[1][1] = BadgeImages[1];
    }
  }

  function BadgeHandler() {
    CurrentUserScore = currentUserScore(scores);
    //console.log(cityWideEvaluation(scores,CurrentUserScore));
    switch(cityWideEvaluation(scores,CurrentUserScore)){
      case 1:
        badgesArray[5][3] = 1;
        badgesArray[5][1] = BadgeImages[10];
        badgesArray[6][1] = BadgeImages[13];
        break;
      case -1:
        badgesArray[5][3] = 0;
        badgesArray[6][3] = 0;
        badgesArray[5][1] = BadgeImages[11];
        badgesArray[6][1] = BadgeImages[13];
        break;
      case 2:
        badgesArray[5][3] = 1;
        badgesArray[6][3] = 1;
        badgesArray[5][1] = BadgeImages[10];
        badgesArray[6][1] = BadgeImages[12];
        break;
    }

    switch (AboveAvg(scores,CurrentUserScore)) {
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
    let temp = checkin(AllData);
    let consecutive = temp[0];
    var total1 =temp[1];
    setTotal(total1);
    checkconsecutive(consecutive, badgesArray);
    if (total1 >= 5) {
      badgesArray[2][3] = 1;
      badgesArray[2][1] = BadgeImages[2];
    } else {
      badgesArray[2][1] = BadgeImages[7];
    }
    // var a = [];
    // a.push(badgesArray);
    // a.push(total);
    return badgesArray;
  }


  function sortArr(arr) {
    //sort the status arr with awarded badges first.
    var x;
    var temp = [];
    for (x = 0; x < arr.length; x++) {
      if (arr[x][3] === 1) {
        temp.push(arr[x]);
      }
    }
    for (x = 0; x < arr.length; x++) {
      if (arr[x][3] === 0) {
        temp.push(arr[x]);
      }
    }
    return temp;
  }
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  var [CurrentUserScore, setCurrentUserScore] = useState(0);
  var [total,setTotal] = useState(0);

  React.useEffect(() => {
    async function check() {
      try {
        setLoading(true);
        let c = await getTodayScore();
        let a = await getAllScore();
        let b = await getTodayId();

        if (loading) {
          setScores(Object.values(c));
          setUserId(Object.values(b));
          let AllData = Object.values(a); //return scores, userid, t(time)
        }
        setCurrentUserScore(currentUserScore(scores));
        setArr(sortArr(BadgeHandler()));
        // let temp = checkin(AllData); 
        // setTotal (temp[1]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    check();
  }, []);

  if (loading) {
    return <div style={{ color: "white" }}>loading...</div>;
  }

  return (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item xs={1} sm={2} md={3} />
        <Grid item xs={10} sm={8} md={6}>
          <Paper className={classes.paper} elevation={10}>
            <Typography className={classes.greenBold} align="center" variant="h5" component="h1">
              Badges
          </Typography>
            <Typography className={classes.greenBold} align="center" variant="h6" component="h2">
              Your score for today is  {CurrentUserScore}
            </Typography>
            <Typography className={classes.greenBold} align="center" variant="h6" component="h2">
              You have GO GREEN along with worldwide users for {total} days!
            </Typography>
            <List>
              {arr.map((element, index) => {
                return (
                  <>
                    <BadgesTest
                      key={index}
                      BadgeImageUrl={element[1]}
                      BadgeExplanations={element[2]}
                    />
                  </>
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={2} md={3} />
      </Grid>
    </React.Fragment>
  );
};

export default Badges;
