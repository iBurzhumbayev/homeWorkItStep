'use strict';

let a = document.querySelector('#input');
let regex = /[0-9]/;

a.oninput = function () {
	a.value = a.value.replace(regex, '');
};

