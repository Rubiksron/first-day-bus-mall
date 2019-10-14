'use strict';
//target html elements and store them in a variable
var leftImageEl = document.getElementById('left');
var rightImageEl = document.getElementById('right');

//LATER COME BACK AND CREATE THIS EVENT LISTENER 
var containerEl = document.getElementById('image_container');

//=============================================================
// //SHOW CONCEPT BY SETTING THESE PROPS MANUALLY
// //setting the src, name, and alt attributes to the leftImageEl
// leftImageEl.src = 'images/goat-away.jpg';
// leftImageEl.name = 'cruisin-goat';
// leftImageEl.alt = 'cruisin-goat';
// //setting the src, name, and alt attributes to the rightImageEl
// rightImageEl.src = 'images/kissing-goat.jpg';
// rightImageEl.name = 'kissing-goat';
// rightImageEl.alt = 'kissing-goat';
//=============================================================

//declare an array to push all new instantiations to
var allGoats = [];
//create a constructor function
function Goat(name) {
  this.name = name;
  this.path = `images/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
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

// //PREVENT DUPLICATES
function renderGoats() {
  //an array to store the unique indexes
  var uniquePicsArray = [];
  //initialize each index with a random integer
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  //check to see the 2 indexes match, if they do, then add another random number until they do not natch
  while(uniquePicsArray[0] === uniquePicsArray[1]) {
    console.error('Duplicate! Re-rolling!');
    uniquePicsArray[1] = makeRandom();
  }
  //adding one view to this goat <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  allGoats[uniquePicsArray[0]].views++;
  //setting the src and alt attributes of the leftImageEl elements
  leftImageEl.src = allGoats[uniquePicsArray[0]].path;
  leftImageEl.name = allGoats[uniquePicsArray[0]].name;
  leftImageEl.title = allGoats[uniquePicsArray[0]].name;

  //adding one view to this goat <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  allGoats[uniquePicsArray[1]].views++;
  //setting the src and alt attributes of the rightImageEl elements
  rightImageEl.src = allGoats[uniquePicsArray[1]].path;
  leftImageEl.name = allGoats[uniquePicsArray[1]].name;
  rightImageEl.title = allGoats[uniquePicsArray[1]].name;
}

//create a function that will give a random index number
// function renderGoats() {
//   //create a random index
//   var randomIndex = makeRandom();
//   //I want to display allGoats[randomIndex];
//   leftImageEl.src = allGoats[randomIndex].path;
//   leftImageEl.alt = allGoats[randomIndex].name;
//   //create a random index
//   randomIndex = makeRandom();
//   //I want to display allGoats[randomIndex];
//   rightImageEl.src = allGoats[randomIndex].path;
//   rightImageEl.alt = allGoats[randomIndex].name;
// }

//helper function that will return a random number

function makeRandom() {
  return Math.floor(Math.random() * allGoats.length);
}

function handleClick() {
  //identify which image was clicked on by the title
  var chosenImage = event.target.title;
  //here we loop over allGoats and compare the name property of each iteration to the chosenImage selected by the user
  for( var i = 0; i < allGoats.length; i++) {
    if(allGoats[i].name === chosenImage) {
      allGoats[i].votes++;
    }
  }
  console.log('my selected image is: ', chosenImage);
  //re-render the goats
  renderGoats();
}

containerEl.addEventListener('click', handleClick);

renderGoats();


