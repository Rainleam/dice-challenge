var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var url1 = "/images/dice" + randomNumber1 + ".png";
var url2 = "/images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", url1 );
document.getElementsByClassName("img2")[0].setAttribute("src", url2 );

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!";
}else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!";
}else {
    document.getElementsByTagName("h1")[0].textContent = "It's a draw!";
};