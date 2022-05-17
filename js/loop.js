"use strict";
for (let i = 1; ; i++) {
  const userInput = prompt("Угадай число");
  if (Number(userInput) < CORRECT_NUMBER) {
    alert("Больше!");
  }
  if (Number(userInput) > CORRECT_NUMBER) {
    alert("Меньше!");
  }
  if (Number(userInput) === CORRECT_NUMBER) {
    alert("Молодец!");
    alert("try = " + i);
    break;
  }
}
