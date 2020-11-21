let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
// let guessNumber;

// постусловие
// do {
//   guessNumber = prompt('Введи число от 1 до 10');
// } while(guessNumber !== null && Number(guessNumber) !== randomNumber);

// предусловие
// while(guessNumber !== null && Number(guessNumber) !== randomNumber) {
//   guessNumber = prompt('Введи число от 1 до 10');
// }

for(let guessNumber; guessNumber !== null && Number(guessNumber) !== randomNumber;) {
  guessNumber = prompt('Введи число от 1 до 10');
}

alert('Вы угадали, случайное число - ' + randomNumber);