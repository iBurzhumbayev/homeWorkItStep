"use strict";

const hour = +prompt('Введите час');
const minute = +prompt('Введите минуты');
const second = +prompt('Введите секунды');


function time(hour, minute, second) {
    return `Время: ${hour}:${minute}:${second}`;
} 
alert(time(hour, minute, second));



const h = +prompt('Введите час');
const m = +prompt('Введите минуты');
const s = +prompt('Введите секунды');
function seconds (h, m, s) {
return (h * 3600) + (m * 60) + s;
}
alert(seconds(h,m,s));