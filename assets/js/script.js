var secondsEl = document.querySelector("#sec");
var msEl = document.querySelector("#ms");
var secondsLeft = 29;
var msLeft = 10;
var index = 0;
var score = 0;
var endQuiz = false;

// this is an array of all the possible questions
var questions = [
  {
    question: "In what country did the first Starbucks open outside of North America",
    choices: ["Mexico", "Japan", "Australia", "France"],
    answer: "Japan"
  },
  {
    question: "What is the tiny piece at the end of a shoelace called?",
    choices: ["Aglet", "Turne", "Bean", "Stitch"],
    answer: "Aglet"
  },
  {
    question: "What year did Facebook first launch?",
    choices: ["2008", "2006", "2004", "2002"],
    answer: "text 32"
  },
  {
    question: "What was the coffee shop called in the hit TV show Friends",
    choices: ["Central Park", "Park Central", "Central Perk", "Downtown Coffee"],
    answer: "Central Perk"
  }
 ]

// create header    question prompt
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

// event listener on each answer choice and then comparing to correct answer and adding to score or subtracting from time remaining
answerChoices.addEventListener("click", function(event) {
  // event.stopPropagation();
  var answerIndex = index;
  var answerChosen = event.target;
  if (answerChosen.textContent === questions[answerIndex].answer) {
    score+=5;
    answerResultP.textContent = "Correct";
    answerResultP.style.order = "3";
    answerResultP.style.padding = "15px";
    document.querySelector("#question-container").appendChild(answerResultP);
  } else { 
    secondsLeft -= 5;
    answerResultP.textContent = "Incorrect"
    answerResultP.style.order = "3";
    answerResultP.style.padding = "15px";
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
// check if end quiz was set to true
    if (endQuiz) {
      clearInterval(timerInterval);
// resetting ms if they reach 0
    } else if (msLeft === 0) {
      secondsLeft -= 1;
      msLeft = 10;
// if seconds is at zero, end quiz and show the score
    } else if (secondsLeft === 0) {
      msLeft = 0;
      msEl.textContent = msLeft;
      clearInterval(timerInterval);
      showScore()
    }
  }, 100);
}

// quiz start function to show the first question and start the timer function
function startQuiz () {
  document.querySelector("#start-quiz").style.display = "none";
  questionCycle()
  timerStart()
}

// logic for cycling through questions and using the index variable to choose the question from array (index is increased after they choose an answer)
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

// showing the players score and setting endQuiz to true to stop timer and hiding question text
function showScore() {
  endQuiz = true;
  document.querySelector("#correct-bonus").innerHTML = "+" + score;
  document.querySelector("#time-bonus").innerHTML = "+" + secondsLeft / 2;
  document.querySelector("#score-total").innerHTML = "+" + (score += secondsLeft / 2);
  document.querySelector("#score").style.display = "flex";
  document.querySelector("#question-container").style.display = "none";
}

// event listener for the submit button to submit score and initials
document.querySelector("#submit").addEventListener("click", function () {
// checking if the initials inputted fit the criteria 
  var initials = document.querySelector("#initials").value.split("");
  if (initials.length > 3 || initials.length === 0 || initials.includes(" ")) {
    document.querySelector("#alert").innerHTML = "Initials must be 1-3 letters and not include spaces";
// changing page to leaderboard page and running store score function and clearing initials box text
  } else {
    window.location = "leaderboard.html";
    storeScore();
    document.querySelector("#initials").value = "";
  }
})

// creating object of user score, getting the scores from local storage, then adding the new user score to the stored scores
function storeScore() {
  var scoreToStore = {
    initials: document.querySelector("#initials").value,
    playerScore: score,
  };
  var storedScores = JSON.parse(localStorage.getItem("scored")) || [];
  storedScores.unshift((scoreToStore));
  localStorage.setItem("scored", (JSON.stringify(storedScores)));
}

// taking user to leaderboard page
  document.querySelector("#high-scores").addEventListener("click", function () {
  window.location = "leaderboard.html";
});

$(".buy-tickets").on("click", function (event) {
  event.stopPropagation()
  console.log('clicked');
  var url = tempEvents[$(this).parent().parent().children().eq(2).attr('id').slice(-1)].eventTicketUrl
  window.open( url, '_blank')
})