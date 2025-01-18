const up = document.querySelector('#up-arrow');
const down = document.querySelector('#down-arrow');

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

const cardArray = Array.from(document.querySelectorAll('.card'));

var prevCard = cardArray[2];
var currentCard = cardArray[0];
var nextCard = cardArray[1];

console.log(prevCard.id);
console.log(currentCard.id);
console.log(nextCard.id);

console.log(typeof(cardArray));

down.addEventListener('click', (e) => {
	showNextCard();
});

function showNextCard() {
	currentCard.classList.add('hidden');
	nextCard.classList.remove('hidden');

	temp = nextCard;
	prevCard = currentCard;
	currentCard = temp;
	var index = cardArray.indexOf(temp);

	if (index < cardArray.length - 1) {
		index++;
	} else {
		index = 0;
	}

	nextCard = cardArray[index];
}

up.addEventListener('click', (e) => {
	showPrevCard();
});

function showPrevCard() {
	currentCard.classList.add('hidden');
	prevCard.classList.remove('hidden');

	temp = prevCard;
	nextCard = currentCard;
	currentCard = temp;

	var index = cardArray.indexOf(temp);

	if (index === 0) {
		index = cardArray.length - 1;
	} else {
		index--;
	}

    prevCard = cardArray[index];
}
