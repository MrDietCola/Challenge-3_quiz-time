var storedScores = JSON.parse(localStorage.getItem("scored")) || [];

// function to empty the array of stored scores
function resetScores() {
  localStorage.setItem("scored", "[]");
  window.location = "leaderboard.html";
}
// takes you back to quiz page to try again
function tryAgain() {
  window.location = "index.html";
}


// creates an li elemnt for each item of the array to populate the leaderboard
function createScoreboard() {
  for (i=0; i < storedScores.length; i++) {
    var scoreLi = document.createElement("li");
    var initialsLi = document.createElement("li");
    initialsLi.textContent = storedScores[i].initials;
    scoreLi.textContent = storedScores[i].playerScore;
    document.querySelector("#initials").appendChild(initialsLi);
    document.querySelector("#scores").appendChild(scoreLi);
  }
}
// clears the current scoreboard and loads a new one through create scoreboard elemtn
function reloadScoreboard() {
document.querySelector("#initials").textContent = "";
document.querySelector("#scores").textContent = "";
createScoreboard();
}

reloadScoreboard();
