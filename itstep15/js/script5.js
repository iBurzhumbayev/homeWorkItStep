'use strict';

const list = document.querySelectorAll('li');
 
function setSelected(event) {
  const selected = document.querySelector('li.selected');
  if(selected) {
    selected.classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}
 
list.forEach(function(li) {
   li.onclick = setSelected;
});