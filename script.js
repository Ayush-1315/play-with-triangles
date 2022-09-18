//Triangle Sides
var hypoSides = document.querySelectorAll(".hypoSide");
var areaSides = document.querySelectorAll(".areaSide");
//Buttons
var angleBtn = document.querySelector("#angle-btn");
var hypoButton = document.querySelector("#hypo-btn");
var areaButton = document.querySelector("#area-btn");
var backButton = document.querySelector("#back-btn");
// Triangle Angles
var angles = document.querySelectorAll(".angle");
// Trivia Form
var triangleTrivia = document.querySelector("#triangleTrivia");
// Navigation
var navigateChoices = document.querySelector("#navigate");
var tabs = document.querySelectorAll(".tabs");
var choiceSelect = document.querySelectorAll(".choice");
var displayDivs = document.querySelectorAll(".display");
// Answers
var angleAnswer = document.querySelector("#triangle-or-not");
var triviaResult = document.querySelector("#triviaAnswer");
var hypotenuse = document.getElementById("hypoAnswer");
var area = document.getElementById("areaAnswer");
// Declaring Variables
let data;
var navTab;
var choiceTab;
var choicesSelect = 0;
var scoreTrivia = 0;
var updateIndex = 0;
//Trivia Answers
var correctAnswers = [
  "90",
  "right angled",
  "Equilateral",
  "√3/4a2",
  "3",
  "10",
  "108",
  "30",
  "18",
  "4.33",
];
// Default Properties
navigateChoices.style.display = "none";
backButton.style.display = "none";
// Problem Statement 1
function isTriangle() {
  let sum = 0;
  for (i = 0; i < 3; i++) {
    sum += parseInt(angles[i].value);
  }
  if (sum == 180) {
    angleAnswer.style.color = "white";
    angleAnswer.innerHTML = "Woah 😃... It's a triangle";
  } else {
    angleAnswer.style.color = "red";
    angleAnswer.innerHTML = "Sorry 😔... It's not a triangle";
  }
  setTimeout(() => {
    for (i = 0; i < 3; i++) {
      angles[i].value = "";
    }
    angleAnswer.innerHTML = "";
  }, 3000);
}
// Problem Statement 2 (Trivia)
triangleTrivia.addEventListener("submit", function claculateScore(e) {
  e.preventDefault();
  data = new FormData(triangleTrivia);
  for (let i of data) {
    if (i[1] == correctAnswers[updateIndex]) {
      scoreTrivia++;
    }
    updateIndex++;
  }
  updateIndex = 0;
  triviaResult.innerHTML = "Your Score:" + scoreTrivia + "/10";
  scoreTrivia = 0;
});
// Reset Trivia
triangleTrivia.addEventListener("reset", () => {
  triviaResult.innerHTML = "";
});
// Problem Statement 3 (Hypotenuse)
function calculateHypotenuse() {
  let sideSum = 0;
  for (let i = 0; i < hypoSides.length; i++)
    sideSum += Math.pow(parseInt(hypoSides[i].value), 2);
  hypotenuse.innerHTML = Math.sqrt(sideSum);
  setTimeout(() => {
    for (i = 0; i < hypoSides.length; i++) {
      hypoSides[i].value = "";
    }
    hypotenuse.innerHTML = "";
  }, 3000);
}
// Problem Statement 4 (Area)
function calculateArea() {
  let sideSum = 1;
  for (let i = 0; i < areaSides.length; i++)
    sideSum *= parseInt(areaSides[i].value);
  area.innerHTML = sideSum / 2;
  setTimeout(() => {
    for (i = 0; i < areaSides.length; i++) {
      areaSides[i].value = "";
    }
    area.innerHTML = "";
  }, 3000);
}
//  Display Divs
function hideRest(showIndex) {
  for (i = 0; i < 4; i++) {
    if (i == showIndex) continue;
    displayDivs[i].style.display = "none";
  }
  displayDivs[showIndex].style.display = "block";
  showNav();
}
//Show-hide Navigation
function showNav() {
  if (choicesSelect == 1) {
    choices.style.display = "none";
    navigateChoices.style.display = "flex";
    backButton.style.display = "inline-block";
  } else {
    choices.style.display = "block";
    navigateChoices.style.display = "none";
    backButton.style.display = "none";
    for (let i = 0; i < 4; i++) displayDivs[i].style.display = "none";
  }
}
// Event Listenters
angleBtn.addEventListener("click", isTriangle);
hypoButton.addEventListener("click", calculateHypotenuse);
areaButton.addEventListener("click", calculateArea);
// Back Button Function
backButton.addEventListener("click", () => {
  choicesSelect = 0;
  showNav();
  triangleTrivia.reset();
});
tabs.forEach((item, index) => {
  item.addEventListener("click", () => {
    navTab = index;
    hideRest(navTab);
  });
});
// Navigation Function
choiceSelect.forEach((item, index) => {
  item.addEventListener("click", () => {
    choiceTab = index;
    choicesSelect = 1;
    hideRest(choiceTab);
  });
});