// let startButtonEl = document.querySelector('#start');

// startButtonEl.addEventListener('click', function() {
//    startButtonEl.style.display = "none";
// });
function main(){
    countdown();
    questionsArray();
}

// array of objects


function countdown() {
    let timeLeft = 120;
    timerEl.textContent = timeLeft;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.textContent = --timeLeft;
        // timeLeft--;
      } else {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        displayMessage();
      }
    }, 1000);
  }
  function displayMessage() {
    let wordCount = 0;
    let msgInterval = setInterval(function () {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }

// function quiz(){
//     for(i = 0; i < questions.length; i++)
//   var A = window.prompt(questions[i].q)
// }

// if(
//     (A === "a" && questions[i].correctAnswer === "a") ||
//     (A === "b" && questions[i].correctAnswer === "b") ||
//     (A === "c" && questions[i].correctAnswer === "c") ||
//     (A === "d" && questions[i].correctAnswer === "d") ||
// )

// {score++ 
// alert('correct');
// } else {
//     alert('wrong');
//     timeLeft -= 10;
// }
// answer = document.querySelector("#answer")
// answer.addEventListener('click',control);



// let questionsArray = [
//     {
//         q: "",
//         answers: {
//             a:"",
//             b:"",
//             c:"",
//             d:"",
//         },
//         correctAnswer: ""
//     },
//     {
//         q: "",
//         answers: {
//             a:"",
//             b:"",
//             c:"",
//             d:"",
//         },
//         correctAnswer: ""
//     }
// ]

// function animatedForm() {
//   const arrows = document.querySelectorAll("fas fa-arrow-right");
  
//   arrows.forEach((arrows => {
//     arrows.addEventListener("click", () => {
//       const input = arrow.previousElementSibling;
//       const parent = arrow.parentElement;
//       const nextForm = parent.nextElementSibling;

//       if (input.type === "text" && validateUser(input)) {
//         nextSlide(parent, nextForm);
//       }
//     });
//   });
// }
// }



// function validateUser(user) {
//   if (user.value.length < 6) {
//     console.log("not enough characters");
//     error("color: #BC3737");
//   } else {
//     error("color: #379A3A");
//     return true;
//   }
// }
// function nextSlide(parent, nextForm) {
//   parent.classList.add("innactive");
//   parent.classList.remove("active");
//   nextForm.classList.add("active");
// }

// function error(color) {
//   document.body.style.backgroundColor = color;
// }
// animatedForm();


startBtn.onclick = countdown;