'use strict'

const countdownElement = document.querySelector('#countdown');
const instructionsElement = document.querySelector('#instructions');
const numberListElement = document.querySelector('#numbers-list');
const answersFormElement = document.querySelector('#answers-form');
const inputElements = document.querySelectorAll('#input-group input');
const messageElement = document.querySelector('#message');

const randomNumbers = [];

let timeLeft = 30
countdownElement.textContent = timeLeft;

function updateCountdown(){
    timeLeft--;
    countdownElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(countdownInterval);
        numberListElement.innerHTML = '';
        answersFormElement.classList.remove('d-none');
        instructionsElement.textContent = 'inserisci i numeri che ricordi';
    }
}
const countdownInterval = setInterval(updateCountdown, 1000)







while (randomNumbers.length < 5){
    const randomNumber = getRandomNumber(1, 50);

    if (!randomNumbers.includes(randomNumber)){
        randomNumbers.push(randomNumber);
    }
}

console.log(randomNumbers);


for (let i = 0; i < randomNumbers.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = randomNumbers [i];
    numberListElement.append(listItem);
}

console.log(numberListElement);

