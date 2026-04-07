'use strict'

const countdownElement = document.querySelector('#countdown');
const instructionsElement = document.querySelector('#instruction');
const numberListElement = document.querySelector('#numbers-list');
const answersFormElement = document.querySelector('#answers-form');
const inputElements = document.querySelectorAll('#input-group input');
const messageElement = document.querySelector('#message');

const randomNumbers = [];



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