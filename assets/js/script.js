var secondsEl = document.querySelector("#sec");
var msEl = document.querySelector("#ms");
var secondsLeft = 29;
var msLeft = 10;
var index = 0;

 var questions = [
  {
    question: "question 1",
    choices: ["text 1", "text 2", "text 3", "text 4"],
    answer: "text 2"
  },
  {
    question: "question 1",
    choices: ["text 1", "text 2", "text 3", "text 4"],
    answer: "text 2"
  },
  {
    question: "question 1",
    choices: ["text 1", "text 2", "text 3", "text 4"],
    answer: "text 2"
  },
  {
    question: "question 1",
    choices: ["text 1", "text 2", "text 3", "text 4"],
    answer: "text 2"
  }
 ]
// Create ordered list element
var answerChoices = document.createElement("ol");
 // Create ordered list items for answers
var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");

// choice1.textContent = questions[index].choices[1];
// choice1.textContent = questions[index].choices[2];
// choice1.textContent = questions[index].choices[3];
// choice1.textContent = questions[index].choices[4];

// choice1.textContent = questions[0].choices[1];
// choice1.textContent = questions[0].choices[2];
// choice1.textContent = questions[0].choices[3];
// choice1.textContent = questions[0].choices[4];

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
  document.querySelector("#question-container").style.display = "block";
  // document.querySelector("#question").textContent = questions[0].question;
  questionCycle(0)
  timerStart()

}

function questionCycle() {
  index += 1;
  document.querySelector("#question").textContent = questions[index].question;
  // choice1.textContent = questions[index].choices[1];
  choice1.textContent = questions[index].choices[0]
  choice2.textContent = questions[index].choices[1];
  choice3.textContent = questions[index].choices[2];
  choice4.textContent = questions[index].choices[3];
  // Append ordered list 
  document.querySelector("#question-container").appendChild(answerChoices);
  // Append list items to ordered list element 
  answerChoices.appendChild(choice1);
  answerChoices.appendChild(choice2);
  answerChoices.appendChild(choice3);
  answerChoices.appendChild(choice4);
}


function generateQuestion() {

}
