function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-right")
    
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
         const input = arrow.previousElementSibling;
         const parent = arrow.parentElement;
         const nextForm = parent.nextElementSibling;
         
         if(input.type === "text" && validateUser(input));
         nextSlide(parent,nextForm);
        
        })
    })
}
let timerEl = document.getElementById('countdown');
let mainEl = document.getElementById('main');

 let startBtn = document.getElementById('start');

let message =
  'You have gone over time, please try again!';
let words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  let timeLeft = 120;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  let timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = --timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = --timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  let msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}




function validateUser(user){
    if(user.value.length < 3){
        console.log('not enough characters');
        error("rgb(189,87,87");
    } else {
        error('color: lightblue');
        return true;
        countdown();
    }}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    parent.classList.add('active');
    }
function error(color) {
    document.body.style.backgroundColor = color;
}
// function validateQuizStart(quiz) {
//     const questionArray 
// }

animatedForm();
startBtn.onclick = countdown;