var secondsEl = document.querySelector("#sec");
var msEl = document.querySelector("#ms");
var secondsLeft = 29;
var msLeft = 10;
var index = 0;
var score = 0;
localStorage.getItem("score");
var endQuiz = false;
var questions = [
  {
    question: "question 1",
    choices: ["text 1", "text 2", "text 3", "text 4"],
    answer: "text 1"
  },
  {
    question: "question 2",
    choices: ["text 211", "text 212", "text 213", "text 214"],
    answer: "text 212"
  },
  {
    question: "question 3",
    choices: ["text 31", "text 32", "text 33", "text 34"],
    answer: "text 32"
  },
  {
    question: "question 4",
    choices: ["text 41", "text 442", "text 43", "text 4"],
    answer: "text 442"
  }
 ]

// create header for question
var questionPrompt = document.createElement("h2");
// create ordered list element
var answerChoices = document.createElement("ol");
// create ordered list items for answers
var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");
// create correct/incorrect element
var answerResultP = document.createElement("p");

answerChoices.addEventListener("click", function(event) {
  // event.stopPropagation();
  var answerIndex = index;
    var answerChosen = event.target;
  if (answerChosen.textContent === questions[answerIndex].answer) {
    score+=5;
    answerResultP.textContent = "Correct";
    answerResultP.style.order = "3";
    document.querySelector("#question-container").appendChild(answerResultP);
  } else { 
    secondsLeft -= 5;
    answerResultP.textContent = "Inorrect"
    answerResultP.style.order = "3";
    document.querySelector("#question-container").appendChild(answerResultP);
  } 
// check if on last index of last question in questions array and either end quiz or move to next question
  if (index === questions.length - 1) {
    showScore()
  } else {
// increase index value so that it goes to next question when function is called again
    index += 1;
    questionCycle();
  }
});

// start countdown timer for quiz
function timerStart() {
  var timerInterval = setInterval(function() {
    msLeft--;
    msEl.textContent = msLeft;
    secondsEl.textContent = secondsLeft;

    if (endQuiz) {
      clearInterval(timerInterval);
    } else if (msLeft === 0) {
      secondsLeft -= 1;
      msLeft = 10;
    } else if (secondsLeft === 0) {
      msLeft = 0;
      msEl.textContent = msLeft;
      clearInterval(timerInterval);
    } 
  }, 100);
}

function startQuiz () {
  document.querySelector("#start-quiz").style.display = "none";
  questionCycle()
  timerStart()
}

function questionCycle() {
  questionPrompt.textContent = questions[index].question;
  choice1.textContent = questions[index].choices[0];
  choice2.textContent = questions[index].choices[1];
  choice3.textContent = questions[index].choices[2];
  choice4.textContent = questions[index].choices[3];
  // append question prompt
  document.querySelector("#question-container").appendChild(questionPrompt);
  // append ordered list for answers
  document.querySelector("#question-container").appendChild(answerChoices);
  // append answer text as list item in answerChoices
  answerChoices.appendChild(choice1);
  answerChoices.appendChild(choice2);
  answerChoices.appendChild(choice3);
  answerChoices.appendChild(choice4);    
}

function showScore() {
  endQuiz = true;
  document.querySelector("#correct-bonus").innerHTML = "+" + score;
  document.querySelector("#time-bonus").innerHTML = "+" + secondsLeft / 2;
  document.querySelector("#score-total").innerHTML = "+" + (score += secondsLeft / 2);
  document.querySelector("#score").style.display = "flex";
  document.querySelector("#question-container").style.display = "none";
}

document.querySelector("#submit").addEventListener("click", function () {
  window.location = "leaderboard.html";
  storeScore();
})

// localStorage.setItem("scored", "[]");

// console.log(storedScores);

function storeScore() {
  var scoreToStore = {
    initials: document.querySelector("#initials").value,
    playerScore: score,
  };
  var storedScores = JSON.parse(localStorage.getItem("scored")) || [];
  // storedScores.push(JSON.stringify(scoreToStore));
  storedScores.push((scoreToStore));
  console.log((storedScores))
  localStorage.setItem("scored", (JSON.stringify(storedScores)));
}

function restart() {
  index = 0;
  score = 0;
  secondsLeft = 29;
  msLeft = 10;
  document.querySelector("#question-container").style.display = "flex";
  questionCycle()
  timerStart()
}

