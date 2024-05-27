"use strict";
const coll = document.getElementsByClassName("collapsible-top");
const hidden = document.getElementsByClassName("hidden");
const questionContent = document.getElementsByClassName("question-content");
const answers = document.querySelectorAll(".answer");
const collapsible = document.querySelectorAll(".collapsible");
const questionBox = document.querySelectorAll(".question-options");
const allButtons = document.querySelectorAll(".buttons-options");
const firstButtons = document.querySelectorAll(".btnq1");
const secondButtons = document.querySelectorAll(".btnq2");
const thirdButtons = document.querySelectorAll(".btnq3");
const fourthButtons = document.querySelectorAll(".btnq4");
const fifthButtons = document.querySelectorAll(".btnq5");
const selection = document.querySelectorAll(".selection");
const btnBgColour = document.querySelectorAll(".buttons-options-bgc");
const selectionShadow = document.querySelector(".selection-shadow");
const unselected = document.querySelectorAll(".unselected");
const inputs = document.querySelectorAll("input");
const finalButton = document.querySelector(".final-button");
const resultsText = document.querySelector(".results-text");
const resultsPage = document.querySelector(".results-page");
const testText = document.querySelector(".test-text");
let i;

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
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

// Getting rid of buttons visuals
firstButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses();
    addClasses(btn);
  });
});

secondButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses2();
    addClasses(btn);
  });
});

thirdButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses3();
    addClasses(btn);
  });
});

fourthButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses4();
    addClasses(btn);
  });
});

fifthButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClasses5();
    addClasses(btn);
  });
});

const removeClasses = function () {
  firstButtons.forEach((btn) => {
    btn.classList.remove("selection");

    btn.classList.remove("selection-shadow");
    btn.classList.add("unselected");
  });
};

const removeClasses2 = function () {
  secondButtons.forEach((btn) => {
    btn.classList.remove("selection");

    btn.classList.remove("selection-shadow");
    btn.classList.add("unselected");
  });
};

const removeClasses3 = function () {
  thirdButtons.forEach((btn) => {
    btn.classList.remove("selection");

    btn.classList.remove("selection-shadow");
    btn.classList.add("unselected");
  });
};

const removeClasses4 = function () {
  fourthButtons.forEach((btn) => {
    btn.classList.remove("selection");

    btn.classList.remove("selection-shadow");
    btn.classList.add("unselected");
  });
};

const removeClasses5 = function () {
  fifthButtons.forEach((btn) => {
    btn.classList.remove("selection");

    btn.classList.remove("selection-shadow");
    btn.classList.add("unselected");
  });
};

const addClasses = function (btn) {
  btn.classList.add("selection");
  btn.classList.add("selection-shadow");
};

// Counting Score
let scoreOne = 0;
let scoreTwo = 0;
let scoreThree = 0;
let scoreFour = 0;
let scoreFive = 0;

firstButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("answer") && "selection" && scoreOne < 1) {
      scoreOne += 1;
    }
    if (!btn.classList.contains("answer") && scoreOne > 0) {
      scoreOne -= 1;
    }

    console.log(scoreOne);
  });
});
secondButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("answer") && "selection" && scoreTwo < 1) {
      scoreTwo += 1;
    }
    if (!btn.classList.contains("answer") && scoreTwo > 0) {
      scoreTwo -= 1;
    }

    console.log(scoreTwo);
  });
});

thirdButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("answer") && "selection" && scoreThree < 1) {
      scoreThree += 1;
    }
    if (!btn.classList.contains("answer") && scoreThree > 0) {
      scoreThree -= 1;
    }

    console.log(scoreThree);
  });
});

fourthButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("answer") && "selection" && scoreFour < 1) {
      scoreFour += 1;
    }
    if (!btn.classList.contains("answer") && scoreFour > 0) {
      scoreFour -= 1;
    }

    console.log(scoreFour);
  });
});

fifthButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("answer") && "selection" && scoreFive < 1) {
      scoreFive += 1;
    }
    if (!btn.classList.contains("answer") && scoreFive > 0) {
      scoreFive -= 1;
    }

    console.log(scoreFive);
  });
});

// Final Button that calculates score
const renderText = function () {
  let totalScore = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive;
  console.log(totalScore);
  push(answerListInDB, totalScore);
};

finalButton.addEventListener("click", renderText);

// allButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.classList.contains("answer") && "selection" && score < 1) {
//       score += 1;
//     }
//     if (!btn.classList.contains("answer") && score > 0) {
//       score -= 1;
//     }

//     console.log(score);
//   });
// });

// Collapsible
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "rem";
    }
  });
}

for (i = 0; i < firstButtons.length; i++) {}

const removeSelection = function () {};

// const buttonClick = function (e) {
//   console.log("it's clicked");
// };

// for (i = 0; i < answers.length; i++) {
//   answers[i].addEventListener("click", buttonClick);
// }
