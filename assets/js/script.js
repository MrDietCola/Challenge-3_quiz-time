var secondsEl = document.querySelector("#sec");
var msEl = document.querySelector("#ms");
var secondsLeft = 29;
var msLeft = 10;
var index = 0;
var score = localStorage.getItem("score");
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


choice1.addEventListener("click", function() {
  var answerIndex = index - 1;
  var answerChosen = questions[answerIndex].choices[0];; 
  if (answerChosen === questions[answerIndex].answer) {
    score+=5;
  } else { 
}
  questionCycle();
  });
choice2.addEventListener("click", function() {
  var answerIndex = index - 1;
  var answerChosen = questions[answerIndex].choices[1];; 
  if (answerChosen === questions[answerIndex].answer) {
    score+=5;
  } else { 
    }
  questionCycle();
});
choice3.addEventListener("click", function() {
  var answerIndex = index - 1;
  var answerChosen = questions[answerIndex].choices[2];; 
  if (answerChosen === questions[answerIndex].answer) {
    score+=5;
  } else { 
    }
  questionCycle();
});
choice4.addEventListener("click", function() {
  var answerIndex = index - 1;
  var answerChosen = questions[answerIndex].choices[3];; 
  if (answerChosen === questions[answerIndex].answer) {
    score+=5;
  } else { 
    }
  questionCycle();
});

function timerStart() {
  var timerInterval = setInterval(function() {
    msLeft--;
    msEl.textContent = msLeft;
    secondsEl.textContent = secondsLeft;

    if (msLeft === 0) {
      secondsLeft -= 1;
      msLeft = 10;
    } else if (secondsLeft === 0) {
      msLeft = 0;
      msEl.textContent = msLeft;
      clearInterval(timerInterval);
    } 
  }, 100);
}

function reduceTime() {
  secondsLeft -= 15;
}

function startQuiz () {
  document.querySelector("#start-quiz").style.display = "none";
  questionCycle()
  timerStart()

}

function questionCycle() {
  if (index > 3) {
  questionPrompt.textContent = "All done";
  answerChoices.textContent = "score: " + score;
  
  // index = 0;
    // console.log(score)
    // score = 0;
    // document.querySelector("#start-quiz").style.display = "block";
    // document.querySelector("#question-container").style.display = "none";

  } else {
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
  // increase index value so that it goes to next question when function is called again
  index += 1;
  }
}
