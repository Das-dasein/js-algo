// // // 1
// // const hello1 = "hello world";
// // // 2
// // const hello12 = 'привет, мир';
// // // 3
// // // const hello = `привет`;

// // // function mul(a, b) {
// // //     return a * b;
// // // }

// // // const a = 2;
// // // const b = 3;

// // // // конкатенация строк
// // // // alert(a + 'x' + b + '=' + mul(a, b));

// // // Я вижу - 
// // //     здесь 
// // //         стоял Маяковский,
// // // стоял
// // //     и стихи слагал по слогам...

// // // const str = "строка1\n\tстрока2";

// // // console.log(str);

// // // const poem = "Я вижу -\n\tздесь\n\t\tстоял Маяковский,\nстоял\n\tи стихи слагал по слогам...";
// // // console.log(poem);

// // // "Да это бунт!" - закричал исправник.
// const quote = `"Да это бунт!" - закричал исправник.`
// // const quote1 = `'Да это бунт! - закричал исправник.`;

// // // console.log(quote);

// // // const js = 'JavaScript';
// // // const emptyString = '';
// // // console.log('Слово ' + js + ' занимает ' + js.length + ' символов');
// // // console.log('Пустая строка занимает ' + emptyString.length + ' символов');

// // // console.log(hello[0]);
// // // console.log(hello[2]);
// // // console.log(hello[hello.length - 1]);

// // let hello = 'Привет'; // привед

// // // for (let i = 0; i < hello.length; i++) {
// // //     console.log(hello[i]);
// // // }

// // // for (let char of hello) {
// // //     console.log(char);
// // // }

// // hello[hello.length-1] = 'д';
// // hello[2] = 'е';

// // console.log(hello);

// // function mul(a, b) {
// //     return a * b;
// // }

// // const a = 2;
// // const b = 3;

// // конкатенация строк
// // const result = a + 'x' + b + '=' + mul(a, b);
// // const result1 = `${a}x${b}=${mul(a, b)}`;
// // console.log(result1);

// // // Я вижу - 
// // //     здесь 
// // //         стоял Маяковский,
// // // стоял
// // //     и стихи слагал по слогам...
// // const poem = `Я вижу -
// //     здесь
// //         стоял Маяковский`;
// // // "Я вижу -\n\tздесь\n\t\tстоял Маяковский,\nстоял\n\tи стихи слагал по слогам...";
// // alert(poem);
// // const upper = "Upper"; 
// // console.log(upper);
// // console.log(upper.toUpperCase());

// // const lower = "LOWEREWRWERWER";
// // console.log(lower);
// // console.log(lower.toLowerCase());

// // const text = 'JSON is a lightweight data-interchange format';

// // // console.log(text.includes('sadasdasdkjalsda'));

// // // console.log(text.startsWith('json'));
// // console.log(text.endsWith('sdfsdfs'));

// // let userName = prompt('Name?');
// // userName = userName[0].toUpperCase() + userName.slice(1);
// // // userName[0] = userName[0].toUpperCase();
// // // artem
// // // a -> A + (rtem);
// // console.log(userName);

// // let js = 'JavaScript';
// // //        0123456789
// // console.log(js.slice(3, 6));

// // const fruits = 'Яблоко,груша,ананас';
// // const list = fruits.split(',');

// // console.log(list.join('/'));

// // console.log('A' < 'a');
// // console.log('а' > 'Я');

// // const cat = "Кот";
// // const code = "Котер";

// // console.log(cat < code)

// // console.log("Ä".localeCompare("Z"));
// // const regexp  = /ab/;
// // const regexp1 = new RegExp("ab+c");

// // console.log(/абыр/.test("рыба"));

// // console.log(/20*/)

// // const pin = '2333';
// // console.log(pin.replace('3', '#'));

// // console.log()


// 1
const hello = "hello";
// 2
const hello1 = 'привет';
// 3
const hello3 = `hello!`;

// const message = "hello\n\tworld";

// "Да это бунт!" - закричал исправник.
// const quote = `I\`m batman`;

// function mul(a, b) {
//     return a * b;
// }

// const a = 2;
// const b = 3;

// конкатенация строк
// alert(a + 'x' + b + '=' + mul(a, b));


// console.log(quote);

// const js = "Javascript";
// const empty = '';
// console.log('Слово ' + js + ' занимает ' + js.length + ' символов');
// console.log('Пустая строка занимает ' + empty.length + ' символов')
// console.log(js[0]);
// console.log(js[js.length - 1]);

// const upper = 'upper';
// console.log(upper.toUpperCase());
// console.log(upper);
// const lower = 'LOWER';
// console.log(lower.toLowerCase());
// console.log(lower);

// let userName = 'bob';
// console.log(userName);

// let userName = prompt('Имя?');
// userName = userName[0].toUpperCase() + userName.slice(1);
// console.log(userName);

// bob ->
// b -> B + ob

const js = "Javascript";
//          0123456789
// console.log(js.slice(2,7));

// for (let i = 0; i < js.length; i++) {
//     console.log(js[i]);
// }

// for (let char of js) {
//     console.log(char);
// }

// 3

function mul(a, b) {
    return a * b;
}

const a = 2;
const b = 3;

// // конкатенация строк
// alert(a + 'x' + b + '=' + mul(a, b));

// const a = 2;
// console.log(`${a}x${b}=${mul(a, b)}`);
// const text = `hello
//         world`;

// const d = `""''\`\`\``;

// console.log(text);

// const fruits = 'Яблоко,груша,ананас';
// const list = fruits.split(',');
// console.log(list);
// console.log(list.join('-'));

// const str = "String";
const cat = "Кот";
const code = "Котт";

console.log(cat < code);