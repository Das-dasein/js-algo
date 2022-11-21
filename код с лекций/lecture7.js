'use strict';

// function min(array) {
//     if (array.length === 0) {
//         return undefined;
//     }

//     let currentMin = array[0];

//     for (let i = 1; i < array.length; i++) {
//         if (currentMin.age > array[i].age) {
//             currentMin = array[i];
//         }
//     }

//     return currentMin;
// }

// const people = [{ age: 30 }, { age: 10 }, { age: 90 }];
// const ages = [];
// for (let m of people) {
//     ages.push(m.age);
// }

// console.log(Math.min(...people));

// console.log(min());

// function lastIndexOf(array, element) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (array[i] === element) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log([2, 10, 10, 1].lastIndexOf(10));
// console.log(lastIndexOf([2, 10, 10, 1], 10));

// let array = [100, 20, 40, 10, 2, 5];

// array.sort((a, b) => { 
//     if (a > b) {
//         return -1;
//     }

//     if (a < b) {
//         return 1;
//     }

//     return 0;
// });

// console.log(array);


function play() {
    let min = 1;
    let max = 20;
    const answer = Math.floor(Math.random() * (max - min)) + min;
    let userAnswer;
    let guessCount = 0;

    do {
        let text = prompt(`Число? От ${min} до ${max}`);

        if (text === null) {
            return;
        }
        userAnswer = +text;
        guessCount++;

        if (userAnswer === answer) {
            alert('🥳');
        } else if (userAnswer < answer) {
            alert('Вы ввели слишком маленькое число');
        } else {
            alert('Вы ввели слишком большое число');
        }

    } while (userAnswer !== answer);

    console.log(`Вы угадали с ${guessCount} попытки`);
}

play();