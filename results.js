"use strict";
const resultsPage = document.querySelector(".results-page");
const resultsText = document.querySelector(".results-text");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIEaLNsT7eu-rOIjio7UuRHQMm1Cx7fmE",
  authDomain: "cardinal-quiz.firebaseapp.com",
  databaseURL: "https://cardinal-quiz-default-rtdb.firebaseio.com",
  projectId: "cardinal-quiz",
  storageBucket: "cardinal-quiz.appspot.com",
  messagingSenderId: "250325720375",
  appId: "1:250325720375:web:dff0d4188360e490410eb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const appSettings = {
  databaseURL: "https://cardinal-quiz-default-rtdb.firebaseio.com/",
};
const answerListInDB = ref(database, "AnswerList");
const correctAnswers = ref(database, "CorrectAnswers");

// onValue(correctAnswers, function (snapshot) {
//   let correctAnswersArray = Object.values(snapshot.val());
//   // for (let i = 0; i < answersArray.length; i++) {
//   //   let currentAnswer = answersArray[i];
//   //   console.log(currentAnswer);
//   console.log(correctAnswersArray);
// });

let clearItems = function () {
  resultsText.innerHTML = "";
};
// Works well but need to delete things from database.
document.addEventListener("DOMContentLoaded", () => {
  onValue(answerListInDB, function (snapshot) {
    let answerArray = Object.entries(snapshot.val());
    for (let i = 0; i < answerArray.length; i++) {
      let currentItem = answerArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      console.log(currentItemID);
      console.log(currentItemValue);
      clearItems();
      resultsText.innerHTML += `Your score is: ${currentItemValue}/5`;
    }
    remove(answerListInDB);
  });
});

// The thing that kind of works
// document.addEventListener("DOMContentLoaded", () => {
//   onValue(answerListInDB, function (snapshot) {
//     let answerInputs = Object.values(snapshot.val());
//     console.log(answerInputs);
//     resultsText.innerHTML += `Your score is ${
//       answerInputs[answerInputs.length - 1]
//     }/5`;
//   });
// });
