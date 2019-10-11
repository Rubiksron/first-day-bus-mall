'use strict';

Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.totalClicks = 0;

Product.left = document.getElementById('left');
Product.center = document.getElementById('center');
Product.right = document.getElementById('right');
Product.container = document.getElementById('image_container');
Product.tally = document.getElementById('tally');

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

Product.all = [];

for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
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
  Product.left.src = Product.all[uniquePicsArray[0]].path;
  Product.center.src = Product.all[uniquePicsArray[1]].path;
  Product.right.src = Product.all[uniquePicsArray[2]].path;
  Product.left.id = Product.all[uniquePicsArray[0]].name;
  Product.center.id = Product.all[uniquePicsArray[1]].name;
  Product.right.id = Product.all[uniquePicsArray[2]].name;
  Product.all[uniquePicsArray[0]].views += 1;
  Product.all[uniquePicsArray[1]].views += 1;
  Product.all[uniquePicsArray[2]].views += 1;
}

function handleClick(event) {
  Product.totalClicks += 1;
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 9) {
    Product.container.removeEventListener('click', handleClick);
    showTally();
  }
  if (event.target.id === 'image_container') {
    return alert('Click on an image, dumbass!');
  }
  for(var i = 0; i < Product.names.length; i++){
    if(event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views');
    }
  }
  displayPics();
}

function showTally() {
  for(var i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views';
    Product.tally.appendChild(liEl);
  }
}

Product.container.addEventListener('click', handleClick);
displayPics();
