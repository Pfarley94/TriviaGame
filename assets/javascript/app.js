
(function () {
  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];


      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
      );
    });

  
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if / else 
      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });

    // this will show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [{
      question: "Who does Bruce Banner turn into?",
      answers: {
        a: "The Hulk",
        b: "Captain America",
        c: "Thor"
      },
      correctAnswer: "a"
      
    },

    {
      question: "Which city is the home of Batman",
      answers: {
        a: "Midway City",
        b: "New York City",
        c: "Gotham City"
      },
      correctAnswer: "c"
    }, 
    {
      question: "What superhero has an 'S' on their chest?",
      answers: {
        a: "Batman",
        b: "Wonder Woman",
        c: "Superman",

      },
      correctAnswer: "c"
    },
    {
      question: "Which superhero is not a member of the X-men?",
      answers: {
        a: "Wolverine",
        b: "Cyclopse",
        c: "The Green Lantern ",

      },
      correctAnswer: "c"
    },
    {
      question: "Peter Parker, aka Spider Man, was raised by his Aunt May and Uncle ____?",
      answers: {
        a: " Sam",
        b: " Ben",
        c:  "Tom",

      },
      correctAnswer: "b"
    }
  ];


  buildQuiz();

  // on sub show results
  submitButton.addEventListener("click", showResults);

  var timeLeft = 30;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    showResults();
    
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}
})();




