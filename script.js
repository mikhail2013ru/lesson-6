'use strict';

// function isNumber() {
//   let askNumber = prompt('"Угадай число от 1 до 100"');

//   return function Random() {
//     if (askNumber === isNaN(askNumber)) {
//       return console.log('Не число');
//     }
  
//     if (parseFloat(askNumber) === 30) {
//       return console.log(askNumber);
//     }
//     isNumber();
//   }  
// }

// let a = isNumber();
// a();
//console.log(a);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const randomNumber = getRandomInt(100);

function game(){
  const num = prompt('Угадай число от 1 до 100?');

  if (num === 'num') {
    alert('До свидания');
    return;
  }

  if (isNum(num)){
    const realNum = +num;

    if (realNum > randomNumber){
      alert('Загаданное число меньше');
      game();
    } else if (realNum < randomNumber) {
      alert('Загаданное число больше');
      game();
    } else {
      alert('вы угадали');
    }
  } else {
    alert('Введите число');
    game();
  }
}

console.dir(game);