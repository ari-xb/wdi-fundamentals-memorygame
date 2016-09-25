
var cards = ['quinn', 'quinn', 'batman', 'batman'];

var cardsInPlay = [];

var gameBoard = document.getElementById("game-board");

// create 4 divs each with class 'card' and appended to the game-board and listens for a click of each card.
var createCards = function() {
for (var i = 0; i < cards.length; i++ ) {
	var card = document.createElement('div');
	card.className = 'card';
	gameBoard.appendChild(card);
	card.setAttribute('data-card', cards[i]);
	card.addEventListener('click', isTwoCards);
	}
}
createCards();

function isMatch(cardsInPlay) {
	if(cardsInPlay[0] === [1]) {
		alert("You found a match!");
}	else if(cardsInPlay[2] === [3]) {
		alert("You found a match!");
}	else alert("Sorry, try again")
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
//batman card (http://i.imgur.com/BahOJzu.jpg)
//quinn card (http://i.imgur.com/PfF9XT5.png)

