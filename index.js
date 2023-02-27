
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1Name = "images/dice" + randomNumber1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", diceImage1Name) ;

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceImage2Name = "images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", diceImage2Name);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}
else {

    document.querySelector("h1").innerHTML = "🚩It's a Tie!🚩";
}