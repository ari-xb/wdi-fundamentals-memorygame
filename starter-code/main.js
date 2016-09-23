
/*var cardOne ='queen';
var cardTwo = 'queen';
var cardThree ='king';
var cardFour ='king';

if ('queen' === 'queen') { 
	alert("You found a match!");
}
else if ('king' === 'king') { 
	alert("You found a match!");
}
else ('queen' === 'king'); { 
	alert("Sorry, try again.");
}
*/
var gameBoard = document.getElementById("game-board");

// create 4 divs each with class 'card' and appended to the game-board.
var createCards = function() {
for (var i = 0; i < 4 ; i++ ) {
	var card = document.createElement('div');
	card.className = 'card';
	gameBoard.appendChild(card);
}
}
createCards();
