window.addEventListener('load', init);
console.log('START THE GAME BY CLICKING A BOX')



//Globals
let imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let playField;
let lastTarget;
const winnerImage = 'goudkistje';
let guessNumberInputField;
let alertMessage;


/**
 * Initialize after the DOM is ready
 */
function init() {
  //Retrieve the playing field element from the HTML
  playField = document.getElementById('playing-field');
  playField.addEventListener('click', playingFieldClickHandler);

  createPlayField();

  const playForm = document.getElementById('play-form');
  playForm.addEventListener('submit', formSubmitHandler);

  guessNumberInputField = document.getElementById('guess-number');
  alertMessage = document.getElementById('alert');
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField() {
  //Empty field & shuffle current array to actually have a 'game feeling'
  imageList = shuffleArray(imageList);

  //Loop through all the images
  for (let i = 0; i < imageList.length; i++) {
    //Create div for card
    const div = document.createElement('div');
    div.classList.add('playing-card');

    //Create & append H2 to div
    const h2 = document.createElement('h2');
    h2.innerHTML = i.toString();
    div.appendChild(h2);

    //Create image & append to div
    // const img = new Image() // alternative
    const img = document.createElement('img');
    img.src = `img/vraagteken-plaatjes.png`;
    img.alt = 'Vraagteken';
    img.dataset.imageIndex = i.toString()
    div.appendChild(img);

    //Append div to playing field
    playField.appendChild(div);
  }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e) {
  const target = e.target;

  //Return when no image is clicked
  if (target.nodeName !== 'IMG'){
    return;
  }

  //If we have a lastTarget, reset to question mark
  if (lastTarget){
    lastTarget.src = 'img/vraagteken-plaatjes.png';
    lastTarget.alt = 'Vraagteken';
  }

  //replace image with actual image
  const image = imageList[target.dataset.imageIndex]
  target.src = `img/${image}.png`;
  target.alt = image;

  //Remember our last click
  lastTarget = target;
}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e) {
  //prevent sending to a server
  e.preventDefault();
  console.log(e);

  const answer = guessNumberInputField.value;

  //How to check if my answer was correct?
  if (winnerImage === imageList[answer]) {
    writeFeedbackMessage('EPIC BRO')
  } else {
    writeFeedbackMessage('Jammer, dat was niet massive :(')
  }
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text) {
  alertMessage.innerHTML = '';
  console.log(text);

  const span = document.createElement('span');
  span.innerText = text;
  alertMessage.appendChild(span);
}

/**
 * Randomize array one-liner using sort
 * @param arr
 * @returns {*}
 */
function shuffleArray(arr) {
  return arr.toSorted(() => (Math.random() - 0.5));
}

