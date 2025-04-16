const aboutBtn = document.querySelector('#about-btn');
const skillsBtn = document.querySelector('#skills-btn');
const closeBtn = document.querySelector('#close-btn');

const heroContent = document.querySelector('.hero-content');
const heroMobile = document.querySelector('.hero-mobile');

const about = document.querySelector('.about');
const skills = document.querySelector('.skills');

const up = document.querySelector('#up-arrow');
const down = document.querySelector('#down-arrow');


var projNum = document.querySelector('.proj-num');

const cardArray = Array.from(document.querySelectorAll('.card'));

if (cardArray.length > 1) {
	var prevCard = cardArray[cardArray.length - 1];
	var currentCard = cardArray[0];
	var nextCard = cardArray[1];
} else {
	var prevCard = cardArray[0];
	var currentCard = cardArray[0];
	var nextCard = cardArray[0];
}

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

aboutBtn.addEventListener('click', (e) => {
	showAboutSection();
});
skillsBtn.addEventListener('click', (e) => {
	showSkillsSection();
});
closeBtn.addEventListener('click', (e) => {
	closeSection();
});

function showAboutSection() {
	heroContent.classList.add('show');
	heroMobile.classList.add('hide');
	closeBtn.classList.add('show');
}
function showSkillsSection() {
	skills.classList.add('show');
	heroMobile.classList.add('hide');
	closeBtn.classList.add('show');
}

function closeSection() {
	if (heroContent.classList.contains('show')) {
		heroContent.classList.remove('show');
	}
	if (skills.classList.contains('show')) {
		skills.classList.remove('show');
	}
	heroMobile.classList.remove('hide');
	closeBtn.classList.remove('show');

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

function updateProjNum() {
	const index = cardArray.indexOf(currentCard) + 1;
	const total = cardArray.length;
	projNum.innerText = `${index}/${total}`;
}
