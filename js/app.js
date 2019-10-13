'use strict';


Goat.names = ['cruisin-goat', 'float-your-goat', 'goat-away', 'goat-out-of-hand', 'kissing-goat', 'sassy-goat', 'smiling-goat', 'sweater-goat'];


Goat.totalClicks = 0;

Goat.left = document.getElementById('left');
Goat.center = document.getElementById('center');
Goat.container = document.getElementById('image_container');
Goat.tally = document.getElementById('tally');

function Goat(name) {
  this.name = name;
  this.path = 'images/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Goat.all.push(this);
}

Goat.all = [];

for(var i = 0; i < Goat.names.length; i++) {
  new Goat(Goat.names[i]);
}

function makeRandom() {
  return Math.floor(Math.random() * Goat.names.length);
}

function displayPics(){
  var uniquePicsArray = [];
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();

  while(uniquePicsArray[0] === uniquePicsArray[1]) {
    console.error('Duplicate! Re-rolling!');
    uniquePicsArray[1] = makeRandom();
  }

  uniquePicsArray[2] = makeRandom();
  while(uniquePicsArray[0] === uniquePicsArray[2] || uniquePicsArray[1] === uniquePicsArray[2]){
    console.error('Duplicate! Re-rolling!');
    uniquePicsArray[2] = makeRandom();
  }
  Goat.left.src = Goat.all[uniquePicsArray[0]].path;
  Goat.center.src = Goat.all[uniquePicsArray[1]].path;

  Goat.left.id = Goat.all[uniquePicsArray[0]].name;
  Goat.center.id = Goat.all[uniquePicsArray[1]].name;

  Goat.all[uniquePicsArray[0]].views += 1;
  Goat.all[uniquePicsArray[1]].views += 1;
}

function handleClick(event) {
  Goat.totalClicks += 1;
  console.log(Goat.totalClicks, 'total clicks');
  if(Goat.totalClicks > 9) {
    Goat.container.removeEventListener('click', handleClick);
    showTally();
  }
  if (event.target.id === 'image_container') {
    return alert('Click on an image, dumbass!');
  }
  for(var i = 0; i < Goat.names.length; i++){
    if(event.target.id === Goat.all[i].name) {
      Goat.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Goat.all[i].votes + ' votes in ' + Goat.all[i].views + ' views');
    }
  }
  displayPics();
}

function showTally() {
  for(var i = 0; i < Goat.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Goat.all[i].name + ' has ' + Goat.all[i].votes + ' votes in ' + Goat.all[i].views + ' views';
    Goat.tally.appendChild(liEl);
  }
}

Goat.container.addEventListener('click', handleClick);
displayPics();
