let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
let guessNumber;

do {
  guessNumber = prompt('Введи число от 1 до 10');
} while(guessNumber !== null && Number(guessNumber) !== randomNumber);

alert('Вы угадали, случайное число - ' + randomNumber);