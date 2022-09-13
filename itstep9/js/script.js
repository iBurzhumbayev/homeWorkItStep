"use strict";

// Создать массив из 10 чисел. Вывести наибольшее и наименьшее значения массивов.
let digits = [10 , 5 , 7 , 4, 2, 6, 3, 8, 9, 1];
const max = Math.max(...digits);
const min = Math.min(...digits);
console.log(max);
console.log(min);

// Заполнить массив из 5 чисел при помощи prompt. Вывести массив, сумму значений и среднее значение массива.
let sum = 0;
let average = 0;
let digits = [5, 20, 17, 21, 1];
for(let i = 0; i < digits.length; i++){
    sum += digits[i];
    average = sum / 2;
    }
console.log(sum);
console.log(average);


// Создать 2 массива из 7 чисел. Сравнить значения в массиве по очереди и выводить информацию в консоль (сравнение производить по индексам, 0 с 0 в обоих массивах и т.д.).
let first = [ 1, 2, 3, 4, 5, 6, 7 ];
let second = [ 1, 2, 3, 4, 5, 8, 10 ];
 
let isEqual = first.toString() === second.toString();
console.log(isEqual);

// Создать массив из 10 чисел. Сохранить во второй массив только те значения первого массива, которые являются четными.
let digitsNew = [];
let digits = [1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0) {
        digitsNew.push(
            digits[i]
        );
    }
}
console.log(digitsNew);