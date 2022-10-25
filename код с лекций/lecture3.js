// function gretting(name) {
//     console.log('hello ' + name);
// }

// gretting('artem');
// gretting('никита');

// function isEven(n) {
//     return n % 2 === 0;
// }

// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(9));

// function mul(a, b) {
//     return a * b;
// }

// console.log(mul(3, 2));

// console.log(mul(5, 5, 10, 15, 20));

// function f() {
//     console.log('1');
//     console.log('2');
//     return;
//     console.log('3');
//     console.log('4');
// }

// function mul(a, b = 1) {
//     console.log(b);
//     return a * b;
// }

// // console.log(mul(2));

// function printFullName(name, surname = '?') {
//     console.log(name + ' ' + surname);
// }

// printFullName('Vasya', 'Ivanov');

// function findFirstDivisor(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return i;
//         }
//     }

//     return n;
// }

// console.log(findFirstDivisor(5));

// function two() {
//     return 2;
// }

// console.log(two());

// const a = 1;
// const b = 2;
// const c = a + b;
// (a+b).toString();

// function inc(x) {
//     const y = x + 1;

//     return y;
// }

// console.log(inc(2));
// console.log(y);

// let count = 0;

// counter();
// counter();
// counter();
// counter();

// counter();
// counter();
// counter();
// counter();
// counter();

// function formatAndPrintName(name) {
//     name = 'xXx' + name + 'xXx';
//     console.log(name);
// }

// let myName = 'Artem';

// console.log(formatAndPrintName(myName));
// console.log(myName);

// myFn();
// myFn();

// let myFn1 = formatAndPrintName;
// myFn1('sddd');


// const myFn = function() {
//     console.log(23);
// };

// myFn();

// function getGrettingFn(language) {
//     switch (language) {
//         case 'ru': {
//             return function(name) {
//                 return 'Здравствуйте,' + name;
//             }
//         }
//         case 'de': {
//             return function (name) {
//                 return 'Guten tag, ' + name;
//             }
//         }
//         default: {
//             return function (name) { return 'Konishua ' + name };
//         }
//     }
// }

// const language = 'sdsdsad'; // de, ru
// let grettingFn = getGrettingFn(language);

// console.log(grettingFn('ARtem'));


// let sum = function (a, b) {
//     return a + b;
// };

// let sum1 = (a, b) => a + b;

// let isEven = n => {
//     let a = n % 2 === 0;
//     return a;
// };



// console.log(isEven(2));

// function adder(a, b, callback, beforeCallback) {
//     beforeCallback();
//     const sum = a + b;
//     callback(sum);
// }

// adder(2, 3, console.log, () => console.log('before'));
// adder(3, 5, alert);

// function makeMatryoshka(n) {
//     if (n === 1) {
//         return console.log('Неделимая матрёшка');
//     } else {
//         console.log('Верхняя половина матрёшки', n);
//         makeMatryoshka(n - 1);
//         console.log('Нижняя половина матрёшки', n);
//     }
// };

// makeMatryoshka(6);

// let getFactorial = (num) => {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * getFactorial(num - 1);
//     }
// }

// let getFactorial = (num) => {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * getFactorial(num - 1);
//     }
// };



// console.log(getFactorial(5));


// // if () {}
// // condition ? a : b;


// let count = 0;

// function fn() {
//     count++;
//     console.log(count);
//     fn();
// }

// fn();

// function factorial(n) {
//     let prod = 1;
//     for (let i = 2; i <= n; i++) {
//         prod *= i;
//     }

//     return prod;
// }

// console.log(factorial(5000000000));

// div(20,5);


// function greeting() {
//     console.log('hello');
// }

// greeting();
// greeting();
// greeting();
// greeting();
// greeting();

// function greeting(name, surname = '?') {
//     console.log(name + ' ' + surname);
// }

// greeting('Artem');

// function findFirstDivisor(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return i;
//         }
//     }

//     return n;
// }

// console.log(findFirstDivisor(5));

// function sum(a, b) {
//     a + b;
// }

// let sum1 = sum(3, 2);
// console.log(sum1);

// function inc(x) {
//     const y = x + 1;

//     return y;
// }

// console.log(inc(3));
// console.log(y);

// function counter() {
//     let count = 0;
//     count++;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(2, 3));

// const a = 1;
// const b = 2;
// const c = a + b;
// (a+b).toString();

// function greeting(name) {
//     name = '***' + name + '***';

//     console.log(name);
// }

// let myName = 'Artem';
// greeting(myName);
// console.log(myName);


// console.log(isEven(3));

// function isEven(num) {
//     return num % 2 === 0;
// }


// function expression

// console.log(sumFn(2, 3));

// let sumFn = function (a, b) {
//     return a + b;
// };

// console.log(a);

// let a = function (a, b) {
//     return a + b;
// };

// function declaration vs function expression
// const language = 'de'; // 'ru', 'de', 'en'
// let grettingFn;

// switch (language) {
//     case 'ru': {
//         grettingFn = function (name) {
//             console.log('Привет, ' + name);
//         };
//         break;
//     }
//     case 'de': {
//         grettingFn = function (name) {
//             console.log('Guten tag, ' + name);
//         }
//         break;
//     }
//     case 'en': {
//         grettingFn = function (name) {
//             console.log('Hello ' + name);
//         }
//         break;
//     }
// }

// grettingFn('Artem');

// let div = function (a, b) {
//     return a / b;
// };
// let div1 = (a, b) => a / b;

// let inc = n => n++;

// function inc(n) {
//     return n++;
// }

// console.log(div(2, 3));

// console.log(div1(4, 2));
// console.log(inc(2));

// если пользователю > 18, то здравствуйте
// иначе привет
let getGrettingWord = (age) => {
    if (age > 18) {
        return 'Здравствуйте, ';
    } else {
        return 'Привет, ';
    }
};

// let getGrettingWord1 = function (age) {
//     if (age > 18) {
//         return 'Здравствуйте, ';
//     } else {
//         return 'Привет, ';
//     }
// };

// console.log(getGrettingWord(10) + ' Artem');

// function adder(a, b, callback) {
//     const sum = a + b;

//     callback(sum);
// }

// adder(3, 5, sum => console.log(sum));
// adder(3, 5, sum => console.log(sum));

const a = 4;

// function foo(x) {
//     const b = a * 4;

//     function bar(y) {
//         const c = y * b;

//         return c;
//     }

//     return bar(b);
// }

// console.log(foo(a));


// function makeMatryoshka(n) {
//     if (n === 1) {
//         console.log('Неделимая матрёшка');
//         return;
//     }

//     console.log('Крышка матрёшки', n);
//     makeMatryoshka(n - 1);
//     console.log('Нижняя часть матрёшки', n)
// }

// makeMatryoshka(5);

// let count = 0;

// function factorial(n) {
//     count++;
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));

// console.log(count);

// let count = 0;

// function fn() {
//     count++;
//     console.log(count);
//     fn();
// }

// fn();

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(114));

// рекурсия -> цикла

// function factorialIter(n) {
//     let prod = 1;
//     for (let i = 2; i <= n; i++) {
//         prod *= i;
//     }

//     return prod;
// }

// console.log(factorialIter(150));

function sum(a, b = 5) {
    return a+b;
}
console.log(sum(3));
console.log(2 + sum(5,5));