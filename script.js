const up = document.querySelector('#up-arrow');
const down = document.querySelector('#down-arrow');

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

var projNum = document.querySelector('.proj-num');

const cardArray = Array.from(document.querySelectorAll('.card'));

const cardText = Array.from(document.querySelectorAll('.card-text'))
const cardImgCont = Array.from(document.querySelectorAll('.card-img-container'))
console.log(cardArray)
const height = window.innerHeight;

if(height <= 750){
	cardText.forEach(elem => {
		elem.classList.add('card-text-hidden');
	});
	cardImgCont.forEach(elem => {
		elem.classList.add('small');
	});
}

if (cardArray.length>1) {
	var prevCard = cardArray[cardArray.length-1];
	var currentCard = cardArray[0];
	var nextCard = cardArray[1];
}else{
	var prevCard = cardArray[0];
	var currentCard = cardArray[0];
	var nextCard = cardArray[0];
}

console.log(prevCard);
console.log(currentCard);
console.log(nextCard);

updateProjNum();
down.addEventListener('click', (e) => {
	showNextCard();
	updateProjNum();

});

function showNextCard() {
	currentCard.classList.toggle('hidden');
	nextCard.classList.toggle('hidden');
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
	updateProjNum();
});

function showPrevCard() {
	currentCard.classList.toggle('hidden');
	prevCard.classList.toggle('hidden');

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

function updateProjNum(){
	const index = cardArray.indexOf(currentCard) +1;
	const total = cardArray.length;
	console.log(`${index}/${total}`)
	projNum.innerText = `${index}/${total}`;


}
