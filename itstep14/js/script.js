



for (let i = 0; i < 9; i++) {
  document.getElementById('game').innerHTML += '<div class="game__block"></div>';
}

let move = 0;

document.getElementById('game').onclick = function (event) {
  console.log(event);
  if (event.target.className === 'game__block') {
    if (move % 2 === 0) {
      event.target.innerHTML = 'x';
      event.target.style.pointerEvents = 'none';
    } else {
      event.target.innerHTML = 'o';
      event.target.style.pointerEvents = 'none';
    }
    move++;
    checkWinner();
  }
};



function checkWinner() {
  let allblock = document.getElementsByClassName('game__block');
  console.log(allblock);
  if (allblock[0].innerHTML==='x' && allblock[1].innerHTML==='x' && allblock[2].innerHTML==='x'){
    allblock[0].style.color = 'red';
    allblock[1].style.color = 'red';
    allblock[2].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_top"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[3].innerHTML==='x' && allblock[4].innerHTML==='x' && allblock[5].innerHTML==='x'){
    allblock[3].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[5].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_center"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[6].innerHTML==='x' && allblock[7].innerHTML==='x' && allblock[8].innerHTML==='x'){
    allblock[6].style.color = 'red';
    allblock[7].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_bottom"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[0].innerHTML==='x' && allblock[3].innerHTML==='x' && allblock[6].innerHTML==='x'){
    allblock[0].style.color = 'red';
    allblock[3].style.color = 'red';
    allblock[6].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical game__vertical_left"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[1].innerHTML==='x' && allblock[4].innerHTML==='x' && allblock[7].innerHTML==='x'){
    allblock[1].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[7].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[2].innerHTML==='x' && allblock[5].innerHTML==='x' && allblock[8].innerHTML==='x'){
    allblock[2].style.color = 'red';
    allblock[5].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical game__vertical_right"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[0].innerHTML==='x' && allblock[4].innerHTML==='x' && allblock[8].innerHTML==='x'){
    allblock[0].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__incline"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[2].innerHTML==='x' && allblock[4].innerHTML==='x' && allblock[6].innerHTML==='x'){
    allblock[2].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[6].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__incline game__incline_rotate"></div>';
    setTimeout (function(){alert('Победили крестики', location.reload());}, 300);
  } else if (allblock[0].innerHTML==='o' && allblock[1].innerHTML==='o' && allblock[2].innerHTML==='o'){
    allblock[0].style.color = 'red';
    allblock[1].style.color = 'red';
    allblock[2].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_top"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[3].innerHTML==='o' && allblock[4].innerHTML==='o' && allblock[5].innerHTML==='o'){
    allblock[3].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[5].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_center"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[6].innerHTML==='o' && allblock[7].innerHTML==='o' && allblock[8].innerHTML==='o'){
    allblock[6].style.color = 'red';
    allblock[7].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__divider game__divider_bottom"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[0].innerHTML==='o' && allblock[3].innerHTML==='o' && allblock[6].innerHTML==='o'){
    allblock[0].style.color = 'red';
    allblock[3].style.color = 'red';
    allblock[6].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical game__vertical_left"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[1].innerHTML==='o' && allblock[4].innerHTML==='o' && allblock[7].innerHTML==='o'){
    allblock[1].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[7].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[2].innerHTML==='o' && allblock[5].innerHTML==='o' && allblock[8].innerHTML==='o'){
    allblock[2].style.color = 'red';
    allblock[5].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__vertical game__vertical_right"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[0].innerHTML==='o' && allblock[4].innerHTML==='o' && allblock[8].innerHTML==='o'){
    allblock[0].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[8].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__incline"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (allblock[2].innerHTML==='o' && allblock[4].innerHTML==='o' && allblock[6].innerHTML==='o'){
    allblock[2].style.color = 'red';
    allblock[4].style.color = 'red';
    allblock[6].style.color = 'red';
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    document.getElementById('game').innerHTML += '<div class="game__incline game__incline_rotate"></div>';
    setTimeout (function(){alert('Победили нолики', location.reload());}, 300);
  } else if (move === 9) {
    document.getElementById('game').innerHTML += '<div class="game__background"></div>';
    setTimeout (function(){alert('Ничья', location.reload());}, 300);
  }
}




