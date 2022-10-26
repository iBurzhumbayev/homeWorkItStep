'use strict';

let video = document.getElementById("myVideo");

video.onmouseover = function () {
    video.play();
}

video.onmouseleave = function () {
    video.pause(); 
    console.log('leave');
};


