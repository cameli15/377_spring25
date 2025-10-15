/*Game Javascript*/
function playGame() {
  var userChoice = document.getElementById("choice").value;
  var choices = ["ROCK", "PAPER", "SCISSORS", "SPOCK"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("userResult").innerHTML =
    "<strong>" + userChoice + "<strong>";
  document.getElementById("computerResult").innerHTML =
    "<strong>" + computerChoice + "<strong>";

  if (computerChoice === "SPOCK") {
    if (userChoice === "SPOCK") {
      alert("Tie");
      document.body.style.backgroundColor = "blue";
    } else {
      alert("Boooo, You Lose!");
      document.body.style.backgroundColor = "red";
    }
  } else if (userChoice === computerChoice) {
    alert("Its a Tie!");
    document.body.style.backgroundColor = "blue";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (userChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    alert("Yay! You Win!");
    document.body.style.backgroundColor = "green";
  } else {
    alert("Boooo, You Lose!");
    document.body.style.backgroundColor = "red";
  }
  return false;
}

/*Contact Page Java */
function validateForm() {
  var question = document.forms["cForm"]["question"].value;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(question)) {
    alert("You've put an invalid character in input! Please try again.");
    return false;
  }

  window.location.href = "success.html";
  return false;
}
