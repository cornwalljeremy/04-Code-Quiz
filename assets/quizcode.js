let timerEl = document.getElementById("countdown");
let mainEl = document.getElementById("main");
let startBtn = document.getElementById("start", "quiz");

function countdown() {
  let timeLeft = 3;
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

// function startQuiz() {
//   // hide start screen
//   var startScreenEl = document.getElementById("start-screen");
//   startScreenEl.setAttribute("class", "hide");
//   // un-hide questions section
//   questionsEl.removeAttribute("name-input");
//   // start timer
//   timerId = setInterval(clockTick, 1000);
//   // // show starting time
//   timerEl.textContent = time;
//   getQuestion();
// }

function quiz() {
  countdown();
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.removeAttribute('class');
  startScreenEl.setAttribute("class", "show");
//   questionsEl.removeAttribute("welcome");
  startScreenEl.innerHTML = "the quiz has started <br>";
  startScreenEl.innerHTML += questionsArray[0].q;
  startScreenEl.innerHTML += questionsArray[0].answers.a; 
  var output = [];
  var answers;
  displayQuestion.textContent = questions[count].length;
  i++;
  for (i = 0; i < questions.length; i++) var A = window.prompt(questions[i].q);
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
//     var scoreInitials = document.getElementById('initialEl')
// })

// function highScore(highScores) {
//     HTMLTableSectionElement.textContent = "High Scores";

//     displayQuestion.innerHTML = "<ul></ul>";
//     displayQuestion.className = "score-item";
//     for(var i = 0; i < highScores.length; i++){
//         displayQuestion.appendChild = document.createElement('li');
//     }
// }
// answer = document.querySelector("#answer")
// answer.addEventListener('click',control);

let count = 0;

let questionsArray = [
  {
    q: "How long have we been in this class?",
    answers: {
      a: "I don't remember!",
      b: "four weeks",
      c: "eternity",
      d: "yes",
    },
    correctAnswer: "b",
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
// for(var i=0; i < questionsArray[count].length; i++);

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
