let timerEl = document.getElementById("countdown");
let mainEl = document.getElementById("main");
let startBtn = document.getElementById("btn", "quiz-start");
// let startScreenEl = document.getElementById("start");
let quizStartEl = document.getElementById("quiz-start");
let startInstructionsEl = document.getElementById("instructions");
let hiddenItems = document.getElementsByClassName("hide");
// let questionList = document.getElementById("question-list");
let rightAnswer = 0;
let questionIndex = 0
let timeLeft = 3;
let timeInterval;

function countdown() {
  
   timeInterval = setInterval(function () {
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
  quiz()
}

function displayMessage() {
  quizStartEl.innerHTML = ""
  quizStartEl.textContent = "Your Score " + rightAnswer

}

function quiz() {
  // countdown();

  //   hiddenItems.removeAttribute("hide");
  startInstructionsEl.setAttribute("class", "hide");
  // startScreenEl.removeAttribute("class");
  // startScreenEl.setAttribute("class", "show");

  quizStartEl.innerHTML = "<br>";
  quizStartEl.innerHTML += questionsArray[questionIndex].q;

  // function displayQuestion() {}
  for (var i = 0; i < questionsArray[questionIndex].answers.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("id", i);
    button.addEventListener("click", function (event) {
      if (event.target.id === questionsArray[questionIndex].correctAnswer) {
        rightAnswer = rightAnswer + 1;
      } else {
        rightAnswer = rightAnswer - 1;
        console.log(rightAnswer)
        timeLeft -= 10
        // return displayQuestion;
      }
      questionIndex++
      if(questionsArray[questionIndex]){
        quiz()
      } else {
          clearInterval(timeInterval)
          displayMessage()

      }
      

    });
    button.textContent = questionsArray[questionIndex].answers[i];
    var stop = document.createElement("br")
    quizStartEl.append(button);

  }


let questionsArray = [
  {
    q: "How long have we been in this class?",
    answers: ["I don't remember!", "four weeks", "eternity", "yes"],
    correctAnswer: "1",
  },
  {
    q: "What is Java?",
    answers: 
      [ "a high level programming language",
       "a night club to buy drugs",
       "good coffee",
       "both a and c"]
    ,
    correctAnswer: "3",
  },
  {
    q: "What does DOM stand for?",
    answers: 
     [  "Do or make",
       "do over man",
       "Document object model",
       "dead on marriage..?", ],
    
    correctAnswer: "2",
  },
  {
    q: "What is the answser to everything?",
    answers: [
       "coffee",
       "puppies",
       "'42'",
       "all the above",
  ],
    correctAnswer: "3",
  },
  {
    q: "what does console.log do?",
    answers: [
       "solves world hunger",
       "give the cheat codes to your fav video game",
       "writes a message in the console for debugging and checking work",
       "alien self-destruct button",
    ],
    correctAnswer: "2",
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

startBtn.onclick = countdown;
