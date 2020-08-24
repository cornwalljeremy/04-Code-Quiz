let timerEl = document.getElementById("countdown");
let mainEl = document.getElementById("main");
let startBtn = document.getElementById("start", "quiz");
let startScreenEl = document.getElementById("start");
let startQuestionsEl = document.getElementById("questions-start");
let startInstructionsEl = document.getElementById("instructions");
let hiddenItems = document.getElementsByClassName("hide");
let questionList = document.getElementById("question-list");


function countdown() {
  let timeLeft = 300;
  let timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = --timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  let wordCount = 0;
  //   if(timeLeft < 0)
}



function quiz() {
  countdown();
  
//   hiddenItems.removeAttribute("hide");
  startInstructionsEl.setAttribute("class", "hide")
  startScreenEl.removeAttribute("class");
  startScreenEl.setAttribute("class", "show");

  startScreenEl.innerHTML = "<br>";
  startScreenEl.innerHTML += questionsArray[0].q;
  
  // assuming first question
  for(var i = 0;i < questionsArray[0].answers.length; i++){
    var button = document.createElement("button");
    button.textContent = questionsArray[0].answers[i];
    questionList.appendChild(button);
  }
  

  
  let output = [];
  let answers;
  questionsArray.textContent = [count].length;
  i++;
//   for (i = 0; i < questionsArray.length; i++) let A = displayMessage(questionsArray[i].q);
  //    if(
  //     (A === "a" && questions[i].correctAnswer === "a") ||
  //     (A === "b" && questions[i].correctAnswer === "b") ||
  //     (A === "c" && questions[i].correctAnswer === "c") ||
  //     (A === "d" && questions[i].correctAnswer === "d") ||
  //     )
}

// score++
// alert('correct');
// } else {
//     alert('wrong');
//     timeLeft -= 10;
// }

// function sendScore({
//     let scoreInitials = document.getElementById('initialEl')
// })

// function highScore(highScores) {
//     HTMLTableSectionElement.textContent = "High Scores";

//     displayQuestion.innerHTML = "<ul></ul>";
//     displayQuestion.className = "score-item";
//     for(let i = 0; i < highScores.length; i++){
//         displayQuestion.appendChild = document.createElement('li');
//     }
// }
// answer = document.querySelector("#answer")
// answer.addEventListener('click',control);

let count = 0;

let questionsArray = [
  {
    q: "How long have we been in this class?",
    answers: [
       "I don't remember!",
      "four weeks",
       "eternity",
       "yes",
    ],
    correctAnswer: 1,
  },
  {
    q: "What is Java?",
    answers: {
      a: "a high level programming language",
      b: "a night club to buy drugs",
      c: "good coffee",
      d: "both a and c",
    },
    correctAnswer: "d",
  },
  {
    q: "What does DOM stand for?",
    answers: {
      a: "Do or make",
      b: "do over man",
      c: "Document object model",
      d: "dead on marriage..?",
    },
    correctAnswer: "c",
  },
  {
    q: "What is the answser to everything?",
    answers: {
      a: "coffee",
      b: "puppies",
      c: "'42'",
      d: "all the above",
    },
    correctAnswer: "d",
  },
  {
    q: "what does console.log do?",
    answers: {
      a: "solves world hunger",
      b: "give the cheat codes to your fav video game",
      c: "writes a message in the console for debugging and checking work",
      d: "alien self-destruct button",
    },
    correctAnswer: "c",
  },
];
// for(let i=0; i < questionsArray[count].length; i++);

// function nextSlide(parent, nextForm) {
//   parent.classList.add("hide");
//   parent.classList.remove("active");
//   parent.classList.add("active");
// }
// function error(color) {
//   document.body.style.backgroundColor = color;
// }
// function validateQuizStart(quiz) {
//     let questionArray
// }

startBtn.onclick = quiz;
