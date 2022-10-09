'use strict';

const background = document.querySelector(".background");

document.querySelector('.button__open').addEventListener('click', () => {
	background.style.cssText = 'display: flex; justify-content: center; align-items: center; background-color: rgba(196, 193, 193, 0.5);';
	document.querySelector(".block").style.cssText = 'display: flex; flex-direction: column; justify-content: center;';
});

document.querySelector('.button__close').addEventListener('click', () => {
	background.style.display = "none";
});



