//var randomNumber1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + (randomNumber0 = (Math.floor(Math.random() * 6)+1)) +".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (randomNumber1 = (Math.floor(Math.random() * 6)+1)) +".png");


if (randomNumber0 > randomNumber1){
  document.querySelector("h1").innerHTML ="Player 1 Wins!";
}
else if (randomNumber1 > randomNumber0) {
  document.querySelector("h1").innerHTML ="Player 2 Wins!";
}

else {
document.querySelector("h1").innerHTML ="Draw";

}
