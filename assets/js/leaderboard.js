var storedScores = JSON.parse(localStorage.getItem("scored")) || [];
console.log(storedScores);
// storedScores = JSON.parse(storedScores);

document.querySelector("#name").innerHTML = storedScores[0].initials;
document.querySelector("#score").innerHTML = storedScores[0].playerScore;

function resetScores() {
  localStorage.setItem("scored", "[]");
}