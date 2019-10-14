'use strict';
//target html elements and store them in a variable
var leftImageEl = document.getElementById('left');
var rightImageEl = document.getElementById('right');

//SHOW CONCEPT BY SETTING THESE PROPS MANUALLY
//setting the src, name, and alt attributes to the leftImageEl
leftImageEl.src = 'images/goat-away.jpg';
leftImageEl.name = 'cruisin-goat';
leftImageEl.alt = 'cruisin-goat';
//setting the src, name, and alt attributes to the rightImageEl
rightImageEl.src = 'images/kissing-goat.jpg';
rightImageEl.name = 'kissing-goat';
rightImageEl.alt = 'kissing-goat';
//=============================================================

//declare an array to push all new instantiations to
var allGoats = [];
//create a constructor function
function Goat(name) {
  this.name = name;
  this.path = `images/${name}.jpg`;
  allGoats.push(this);
}
//instantiate new Goats
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-away');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

//create a function that will give a random index number
function renderGoats() {
  //create a random index
  var randomIndex = makeRandom();
  //I want to display allGoats[randomIndex];
  leftImageEl.src = allGoats[randomIndex].path;
  leftImageEl.alt = allGoats[randomIndex].name;
  //create a random index
  randomIndex = makeRandom();
  //I want to display allGoats[randomIndex];
  rightImageEl.src = allGoats[randomIndex].path;
  rightImageEl.alt = allGoats[randomIndex].name;
}
//helper function that will return a random number
function makeRandom() {
  return Math.floor(Math.random() * allGoats.length);
}

renderGoats();

// //PREVENT DUPLICATES
// function renderGoats() {
//   //an array to store the unique indexes
//   var uniquePicsArray = [];
//   //initialize each index with a random integer
//   uniquePicsArray[0] = makeRandom();
//   uniquePicsArray[1] = makeRandom();
//   //check to see the 2 indexes match, if they do, then add another random number until they do not natch
//   while(uniquePicsArray[0] === uniquePicsArray[1]) {
//     console.error('Duplicate! Re-rolling!');
//     uniquePicsArray[1] = makeRandom();
//   }
//   //setting the src and alt attributes of the leftImageEl elements
//   leftImageEl.src = allGoats[uniquePicsArray[0]].path;
//   leftImageEl.alt = allGoats[uniquePicsArray[0]].name;
//   //setting the src and alt attributes of the rightImageEl elements
//   rightImageEl.src = allGoats[uniquePicsArray[1]].path;
//   rightImageEl.alt = allGoats[uniquePicsArray[1]].name;
// }
