'use strict';

let arr = ['red','yellow','green'],
	a = document.querySelectorAll('.circle');

let i = -1;

document.querySelector('button').addEventListener('click', () => {
	i++;
        if(a[i-1]) {
			a[i-1].style.backgroundColor = '';
		}
        if(i === arr.length) {i = 0;} {
        a[i].style.backgroundColor = arr[i];
		}
});