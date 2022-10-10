// correct
// let variable, _variable, variable1, variable_1, Variable, $;

// incorrect
// let 12var;
// let let;

// camelCase
// let userName;
// // snake_case
// let user_name;
// // UPPER CASE
// let RED = 0xFF0;

// Простые типы
// let age = 123,
//     isTeacher = true,
//     myName = 'Artem',
//     status = null,
//     undef = undefined;

// let a = 5;

// consts

// const today = 'Monday';

// Числа

// [-2^53-1, 2^53-1]

// 2000 // десятичная
// 2e3 // экспоненциальная == 2*10^3;
// 0b11 // двоичная 1 * 2 ^ 1 + 1 * 2 ^ 0
// 0xFF // Шестнадацатеричная 15 * 16 ^ 1 + 15 * 16 ^ 0
// 2.5 // Вещественное

// Арифметические операторы

// Бинарные:
// console.log(2.1 + 3.2);
// console.log(3 - 2);
// console.log(3 / 2);
// console.log(3 * 2);
// console.log(17 % 5); - остаток от деления
// console.log(9 ** 2);

// Унарные:

// let i = 3;
// console.log(-i);
// console.log(++i);
// console.log(i);

// let j = 3;
// console.log(j++);
// console.log(j);  

// Присваивание с операцией:
// let sum = 20;
// sum = sum + 5;
// sum += 5;
// same:
// sum *= 3;
// sum /= 5;

// Операторы сравнения:

// console.log(10 < 5);
// console.log(2 > 3);
// console.log(5 >= 3);
// console.log(3 <= 2);

// Сравнения на равенство
// Строгое:
// console.log(10 === 10);
// console.log(10 !== 9);

// Объект Math

// Math.sqrt(3);
// Math.pow(Math.PI, Math.E)

// Специальные числовые значения:
// Infinity
// console.log(1 / 0 === Infinity);
// console.log(Math.log(0) === -Infinity);
// console.log(-1 / 0 === -Infinity);
// console.log(2 ** 1024 === Infinity);

// console.log(Infinity === Infinity + 1);
// console.log(Infinity === Infinity + Infinity);

// NaN

// console.log(0 / 0);
// console.log(Infinity / Infinity);
// console.log(Math.sqrt(-1));

// check eq:

// console.log(NaN === NaN);  //v
// console.log(Number.isNaN(0 / 0)); //x

// Ошибки округления:

// console.log(0.1 + 0.2 === 0.3);

// https://0.30000000000000004.com/

// Строки

// console.log("string");
// console.log('string');
// console.log('123'.length);

// Конкатенация строк:
// console.log("Hello " + "world");

// console.log("Hello"[1]);

// Булевы
// console.log(true);
// console.log(false);

// undefined null

// let tmp;
// console.log(tmp);

// let tmp = null;
// console.log(tmp);

// Приведение типов

// console.log(1 + "3");
// console.log(2 * '3');

// Явное преобразование в число

// Number

// const value = '123';

// console.log(Number(value));
// console.log(+value);
// console.log(parseFloat(value));
// console.log(parseInt(value));

// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(1));
// console.log(Number("fff"));

// console.log(parseInt("2333ffff"));
// console.log(parseFloat("2.33fff"));

// Преобразование в строки:

// console.log(String(""));
// console.log(String(Infinity));
// console.log(String(NaN));
// console.log(String(true));

// Преобразование в булево:
// falsy

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

const pi = 3.14;
let radius = 2.2;
let area = pi * radius ** 2;
radius += 1;