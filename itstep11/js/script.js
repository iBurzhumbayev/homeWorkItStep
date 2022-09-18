"use strict";


// 1. Дана строка. Если в строке больше трех различных символов, то удалить в строке три любых различных символа, иначе добавить в строку в произвольных местах новые элементы так, чтобы количество различных элементов было больше трех. 

let str = 'lorem ipsum dolor sit amet consectetur';
let arr = str.split(' ');
let more = Math.ceil(Math.random() * (arr.length - 3));
let less = Math.ceil(Math.random() * arr.length);

console.log(str);

for (let i = 0; i < arr.length; i++) {
    if (arr.length > 3) {
        arr.splice(more, 3);
    } else if (arr.length < 3) {
        arr.splice(less, 0, 'one', 'two', 'three', 'four');
    }
}

console.log(arr.join(' '));




// 2. Строка состоит из слов, разделенных одним или несколькими пробелами. Поменяйте местами наибольшее по длине слово и наименьшее.

let str = "lorem ipsum dolor sit amet consectetur";
let arr = str.split(" ");

let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length < min.length) {
    min = arr[i];
  }else if (arr[i].length > max.length) {
    max = arr[i];
  }
}
console.log(min);
console.log(max);

let minIndex = arr.indexOf(min);
let maxIndex = arr.indexOf(max);
console.log(minIndex);
console.log(maxIndex);

[arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
console.log(arr.join(' '));




// 3. Строка состоит из слов, разделенных одним или несколькими пробелами. Переставьте слова в алфавитном порядке.
let str = 'lorem ipsum dolor sit amet consectetur adipisicing elit';
let arr = str.split(' ');
let sort = arr.sort();
console.log(sort.join(' '));