// const a = 1;
// {
//     const b = 2;
//     console.log(a,b);
//     {
//         const c = 3;
//         console.log('C',a,b,c);
//     }
// }

// {
//     let v = 10;
//     console.log(v);
// }

// console.log(16,v);

// const v = 123  + 4;
// const z = v ** 1;
// console.log(z);


// if (Number.isNaN(num)) {
//     console.log('вы ввели не число')
// } else {
//     console.log('x*x='+num**2);
// }

// if (Number.isNaN(num)) {
//     console.log('вы ввели не число')
// } else if (num > 0) {
//     console.log('1');
// } else if (num === 0) {
//     console.log('0');
// } else {
//     console.log(-1);
// }

// while

// let sum = 0;
// let n = 1;
// const limit = Number(prompt('number?'));

// while (n < limit) {
//     console.log('n',n);
//     console.log('sum', sum);
//     sum = sum + n;
//     n++;
// }

// console.log(sum);

// let userName;

// do {
//     userName = prompt('name?');
// }
// while (!userName);

// console.log('hello ' + userName);



// for (let i = 10; i < 100; i++) {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
// }

// let prod = 1;
// const a = 3;
// const pow = 3;

// for (let i = 1; i <= pow; i++) {
//     prod = prod * a;
// }

// console.log(prod);

for (let x = 22; x < 40; x++) {
    if (x % 2 === 1) {
        continue;
    }

    console.log(x);
}
