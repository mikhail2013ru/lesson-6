'use strict';

// function changeTires(snowTires) {
//   snowTires--;
//   console.log(snowTires);

//   if(snowTires > 0) {    
//     changeTires(snowTires);
//   }
// }

// changeTires(4);

let askNumber = +prompt('"Угадай число от 1 до 100"');

function getNumber(count) {
  //count--;
  console.log(count);

  function number() {
    getNumber(askNumber);
  }

  if(count > askNumber) {
    alert('"Загаданное число меньше"');    
    //getNumber(count);
  }
  if(count < askNumber) {
    alert('"Загаданное число больше"');    
    //getNumber(count);
  }
  if(count === isNaN(askNumber)) {
    alert('"Введи число!"');    
    //getNumber(count);
  }

  if(count === isNaN(askNumber)) {
    alert('"Введи число!"');    
    //getNumber(count);
  }

  number();
}

// let a = 60;

// function one() {
//   let x = 10;

//   function two(y) {
//     function tree() {
//       return x * y;
//     }
//     console.dir(tree); 
//     return x + y + tree();
//   }  

//   return two(15);
// }

// console.log(one());

// function funcMath(a) {
//   return function(b) {
//     console.log(a * b);
//   };
// }

// const mathPow = funcMath(10);
// mathPow(5);
// console.dir(mathPow);
