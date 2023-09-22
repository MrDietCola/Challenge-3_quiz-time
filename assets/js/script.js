var secondsEl = document.querySelector("#sec");
var msEl = document.querySelector("#ms");
var secondsLeft = 29;
var msLeft = 10;

function timerStart() {
  var timerInterval = setInterval(function() {
    msLeft--;
    msEl.textContent = msLeft;
    secondsEl.textContent = secondsLeft;


    if (msLeft === 0) {
      secondsLeft -= 1;
      msLeft = 10;
    } else if (secondsLeft === 0) {
      clearInterval(timerInterval)
    } 

  }, 100);
}

timerStart();

function reduceTime() {
  secondsLeft -= 15;
  console.log("clicked")
}