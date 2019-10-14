Goat.names = ['cruisin-goat', 'float-your-goat', 'goat-away', 'goat-out-of-hand', 'kissing-goat', 'sassy-goat', 'smiling-goat', 'sweater-goat'];

Goat.totalClicks = 0;

Goat.left = document.getElementById('left');
Goat.right = document.getElementById('right');

Goat.container = document.getElementById('image_container');
Goat.tally = document.getElementById('tally');
Goat.all = [];

function Goat(name) {
  this.name = name;
  this.filepath = 'images/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Goat.all.push(this);
}


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

  Goat.left.src = Goat.all[uniquePicsArray[0]].filepath;
  Goat.right.src = Goat.all[uniquePicsArray[1]].filepath;

  Goat.left.id = Goat.all[uniquePicsArray[0]].name;
  Goat.right.id = Goat.all[uniquePicsArray[1]].name;

  Goat.all[uniquePicsArray[0]].views += 1;
  Goat.all[uniquePicsArray[1]].views += 1;
}

function handleClick(event) {
  Goat.totalClicks += 1;
  console.log(Goat.totalClicks, 'total clicks');
  if(Goat.totalClicks === 9) {
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


// function renderGoats() {
//   //an array to store the unique indexes
//   var uniquePicsArray = [];
//   //initialize each index with a random integer
//   uniquePicsArray[0] = makeRandom();
//   uniquePicsArray[1] = makeRandom();
//   //check to see the 2 indexes match, if they do, then add random numners until they do not
//   while(uniquePicsArray[0] === uniquePicsArray[1]) {
//     console.error('Duplicate! Re-rolling!');
//     uniquePicsArray[1] = makeRandom();
//   }
//   //setting the src and alt attributes of the leftImageEl elements
//   leftImageEl.src = allGoats[uniquePicsArray[0]].filepath;
//   leftImageEl.alt = allGoats[uniquePicsArray[0]].name;
//   //setting the src and alt attributes of the rightImageEl elements
//   rightImageEl.src = allGoats[uniquePicsArray[1]].filepath;
//   rightImageEl.alt = allGoats[uniquePicsArray[1]].name;
// }