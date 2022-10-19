// // {
// //     const a = 2;
// // }

// // console.log(a);

// // const a = 1;

// // {
// //     const a = 2;
// //     console.log(a);
// // }

// // console.log(a);

// // {
// //     // console.log(a); // TDZ
// //     // a++; // TDZ
// //     let a = 100500;
// //     console.log(a);
// // }


// // TDZ (2):

// // let a = 1;

// // {
// //     console.log(a);
// //     let a = 23;
// // }

// // let n = 8;
// // if (n % 2 === 0) {
// //      console.log('чет');
// // }

// // let n = 20;

// // if (n % 2 === 0) {
// //      console.log('чет');
// // } else {
// //     console.log('нечет');
// // }

// // if (0) {
// //     console.log('aaaa');
// // }

// // if ('    ') {
// //     console.log('d');
// // }

// // const num = Number(prompt('Число?'));

// // if (Number.isNaN(num)) {
// //     console.log('Вы ввели не число!');
// // } else if (num % 2 === 0) {
// //     console.log('Число чётное');
// // } else {
// //     console.log('Число нечётное!');
// // }

// // if (true) {
// //     let a = 2;
// // }

// // console.log(a);

// // const x = Number(prompt("x?"));
// // // let sign;

// // // if (x > 0) {
// // //     sign = 1;
// // // } else {
// // //     sign = -1;
// // // }

// // const sign = x > 0 ? 1 : -1;
// // console.log(sign);

// // 0 > 0 ? 1 : -1;

// // const x = Number(prompt("x?"));
// // let sign;

// // if (x > 0) {
// //     sign = 1;
// // } else if (x < 0) {
// //     sign = -1;
// // } else {
// //     sign = 0;
// // }

// // console.log(sign);

// // const x = Number(prompt("x?")); //-10
// // const sign = x > 0 ? 1 :
// //     x < 0 ? -1 :
// //         0;

// let sum = 0;
// let n = 1;
// const limit = 3;
// // [1, limit-1]
// while (n < limit) {
//     sum += n;
//     console.log('n',n);
//     console.log('sum',sum);
//     n++;
//     // console.log(n);
// }

// // console.log(sum);

// // while (true) {}

// // let i = 0;

// // while (i < 5) {
// //     console.log(i);
// //     // i++;
// // }

// // let userName;

// // do {
// //     userName = prompt('Введите ваше имя:');
// // } while (!userName);

// // console.log('Hello ' + userName);

// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// // }

// // let i = 0;

// // while (i < 3) {
// //     console.log(i);
// //     i++;
// // }

// // for (let i = 0; i < 3;) {
// //     console.log(i);
// //     i++;
// // }

// // let i = 0;

// // for (; i < 3; i++) {
// //     console.log(i);
// // }

// // a ** pow = a * a * a * ... a;

// // let prod = 1;
// // const a = 3;
// // const pow = 3;

// // // 3 * 3 * 3;

// // for (let i = 1; i <= pow; i++) {
// //     prod *= a;
// // }

// // console.log(prod);

// // break;

// // let sum = 0;

// // while (true) {
// //     const text = prompt('Введите q для выхода либо число');
// //     if (!text || text === 'q') {
// //         break;
// //     }

// //     const a = Number(text);

// //     if (!Number.isNaN(a)) {
// //         sum += a;
// //     }
// // }

// // console.log(sum);

// // continue;

// // for (let i = 0; i < 10; i++) {
// //     if (i % 2 === 1) {
// //         continue;
// //     }

// //     console.log(i);
// // }

// let dayOfWeek;
// let numberOfDay = 2;

// switch (numberOfDay) {
//     case 1: { // if (numberOfDay === 1)
//         dayOfWeek = 'Понедельник';
//         break;
//     }
//     case 2: { // else if (numberOfDay === 2)
//         if (true) {}
//         dayOfWeek = 'Вторник';
//         break;
//     }
//     case 3: { // else if (numberOfDay === 3)
//         dayOfWeek = 'Среда';
//         break;
//     }
//     case 4: { // else if (numberOfDay === 4)
//         dayOfWeek = 'Четверг';
//         break;
//     }
//     case 5: { // else if (numberOfDay === 5)
//         dayOfWeek = 'Пятница';
//         break;
//     }
//     case 6: { // else if (numberOfDay === 6)
//         dayOfWeek = 'Суббота';
//         break;
//     }
//     case 7: { // else if (numberOfDay === 7)
//         dayOfWeek = 'Воскресенье';
//         break;
//     }
//     default: { // else
//         dayOfWeek = '?';
//     }
// }

// console.log(dayOfWeek)