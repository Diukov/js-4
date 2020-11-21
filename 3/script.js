let multipleNumber = Number(prompt('Введи кратное число'));
let amountOfNumbers = Number(prompt('Введи количество чисел, которые необходимо вывести'));
let counter = 0;
let i = 0;

// постусловие
do {
  i++;
  if(i % multipleNumber) continue;
  counter++;
  console.log(i);
} while(counter < amountOfNumbers);

// предусловие
i = 0;
counter = 0;

while(counter < amountOfNumbers) {
  i++;
  if(i % multipleNumber) continue;
  counter++;
  console.log(i);
}

// цикл for
counter = 0;

for (i = 1; counter < amountOfNumbers; i++) {
  if(i % multipleNumber) continue;
  counter++;
  console.log(i);
}