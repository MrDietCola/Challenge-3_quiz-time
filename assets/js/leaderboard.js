var storedScores = JSON.parse(localStorage.getItem("scored")) || [];

function resetScores() {
  localStorage.setItem("scored", "[]");
  window.location = "leaderboard.html";
}

function tryAgain() {
  window.location = "index.html";
}


// create score element
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

function reloadScoreboard() {
document.querySelector("#initials").textContent = "";
document.querySelector("#scores").textContent = "";
createScoreboard();
}

reloadScoreboard();
