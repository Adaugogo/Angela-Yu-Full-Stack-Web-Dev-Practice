var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
if (randomNumber1 === 1) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice1.png");
}else if (randomNumber1 === 2) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice2.png");
}else if (randomNumber1 === 3) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice3.png");
}else if (randomNumber1 === 4) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice4.png");
}else if (randomNumber1 === 5) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice5.png");
}else if (randomNumber1 === 6) {
  document.querySelector("#player1 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
if (randomNumber2 === 1) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice1.png");
}else if (randomNumber2=== 2) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice2.png");
}else if (randomNumber2 === 3) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice3.png");
}else if (randomNumber2 === 4) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice4.png");
}else if (randomNumber2 === 5) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice5.png");
}else if (randomNumber2 === 6) {
  document.querySelector("#player2 img").setAttribute("src", "Dicee Challenge - Starting Files/images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩It's a Draw!";
}
