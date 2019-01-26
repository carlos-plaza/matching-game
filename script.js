const playButton = document.querySelector('button');
const gridContainer = document.querySelector('.grid-container');
let gridItemList = document.querySelectorAll('.grid-item');
let pictures = document.querySelectorAll('.pic');
let dogSelection = document.querySelector('.dogSelection');
let result = document.querySelector('.result');
let currentSelection = [];

function getRandomNumber() {
  let number = Math.floor( Math.random() * 32 +1 );
  return number;
}

function makeImageTransparent(images) {
  images.forEach(img => {
    img.style.opacity = 0;
  });
}

function changeGridOrder() {
  gridItemList.forEach(gridItem => {
    gridItem.style.order = getRandomNumber();
  });
}


function startGame() {
  currentSelection = [];
  dogSelection.textContent = `Select 2 pictures`;
  makeImageTransparent(pictures);
  changeGridOrder();
}

playButton.addEventListener('click', startGame);

gridContainer.addEventListener('click', function() {
  //Add the selected dog picture into the selected dog breeds array to keep track of currently selected dog
  currentSelection.push(event.target);

  event.target.style.opacity = 1;

  result.textContent = "";
  dogSelection.textContent = `You selected a ${currentSelection[0].dataset.breed} and a`;
  if (currentSelection.length === 2) {
    dogSelection.textContent = `You selected a ${currentSelection[0].dataset.breed} and a ${currentSelection[1].dataset.breed}`

    if (currentSelection[0].dataset.breed === currentSelection[1].dataset.breed) {
      result.textContent = `Awesome! You found a matching pair`;
    } else {
      result.textContent = `Aww man. They don't match.`
      currentSelection.forEach(element => {
        element.style.opacity = 1;
      });
    }
    currentSelection = [];
  }
  console.log(currentSelection);
});