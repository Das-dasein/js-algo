// function max(a, b) {
//     // if
//     // тернарный оператор
//     // 1. нам надо сравнить a и b
//     // если a > b то вернуть a
//     // иначе надо вернуть b
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(max(3, 5));
// console.log(max(8, 2));

// функция, которая печатает чётные числа от 2 до 100;

// распечатать все числа с 2 до 100 с шагом 2

// печатьЧётныхЧисел
// printEvenNumbers
// function printEvenNumbers() {
//     // while, do/while, for
//     for (let i = 2; i <= 100; i += 2) {
//         console.log(i);
//     }
// }

// printEvenNumbers();

/**
 * складывает все целые числа от start до end
 */
// function sum(start, end) {
//     let s = 0;
//     for (let i = start; i <= end; i += 1) {
//         s += i;
//     }

//     return s;
// }

// console.log(sum(10, 15));

/**
 * Ищет первое число меньше start, которое делится на 7
 */
// function findFirstDivisor(start) {
//     while (start % 7 !== 0 && start !== 0) {
//         console.log(start);
//         start -= 1;
//     }

//     return start;
// }

// console.log('Первое число', findFirstDivisor(3));

// получитьЦенуДоставки

/**
 * Функция принимает на вход количество товаров count.
 * Доставка одного товара - 215 р.
 * Каждый последующий товар по цене 50 р.
 * Необходимо вернуть цену доставки
 */
// function getDeliveryPrice(count) {
//     if (count === 0) {
//         return 0;
//     }

//     const firstDeliveryPrice = 215;
//     const nextDeliveryPrice = 50;

//     return firstDeliveryPrice + nextDeliveryPrice * (count - 1);
// }

// console.log(getDeliveryPrice(3));
/**
 * answer - загаданное число
 * 
 */
 function guess(answer) {
    let number; // число, введённое пользователем
    do {
        number = Number(prompt('Введите число'));

        if (answer > number) {
            alert('Введи больше')
        } else if (answer < number) {
            alert('Введи меньше');
        } else {
            alert('Угадал!😍😍');
        }
    } while (answer !== number); // пока не угадал => пока введённое не совпадёт с заданным
}

const answer = Math.floor(Math.random() * 50); // от 0 до 50 (СЛУЧАЙНОЕ);
// guess(answer);

/**
 * Функция возводит число a в степень n
 */
function pow(a, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return a;
    } else {
        console.log(`${a}^${n}=${a}*${a}^(${n - 1})`)
        return a * pow(a, n - 1);
    }
}

// console.log(pow(2, 5));

/**
 * Возвращает n-е число Фиббоначчи
 */
function fibbonacci(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibbonacci(n - 1) + fibbonacci(n - 2);
    }
}

console.log(fibbonacci(9));