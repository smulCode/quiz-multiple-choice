
import {user} from "./userData.js"
import {mathProblems} from "./mathProblems.js"
import {selectQuestion} from "./functions.js"
import {nextMathProblem} from "./functions.js"
import {previousMathProblem} from "./functions.js"

// let score = 0;


// const amountMathProblems = mathProblems.length;
let count = 1;
let currentIndex = 0;
let mathProblemNr = 0 ;
let quizQuestion = mathProblems[mathProblemNr];


export const quiz = (mathProblem) => {
  //index
  user["userCurrentQuestion"] = mathProblems.indexOf(mathProblem);
// console.log(user);
  //container quiz
  const containerQuiz = document.createElement("div");
  containerQuiz.classList.add("container-quiz");
  containerQuiz.setAttribute("data-index", mathProblems.indexOf(mathProblem));


  //title
  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz-title");
  quizTitle.innerHTML = "Math Problem";

  //quest count

  const questionCount = document.createElement("div");
  questionCount.classList.add("question-count");
  questionCount.innerHTML = `${count++}/${mathProblems.length}`;

  //question

  const mathQuestion = document.createElement("div");
  mathQuestion.classList.add("math-question");
  mathQuestion.innerHTML = mathProblem.question;

  //multiple choice list
  const solutions = document.createElement("ul");
  solutions.classList.add("solutions");

  //multiple choice list items
  mathProblem.all_answers.forEach((answer) => {
    const questionBar = document.createElement("li");
    questionBar.classList.add("question-bar");
    questionBar.innerText = answer;
    questionBar.addEventListener("click", selectQuestion);

    if (answer === mathProblem.correct_answer) {
      questionBar.setAttribute("data-answer", "correct");
      questionBar.setAttribute("Value", mathProblem.correct_answer);
    } else {
      questionBar.setAttribute("data-answer", "incorrect");
      questionBar.setAttribute("value", questionBar.innerHTML);
    }

    solutions.append(questionBar);
  });

  //add to container
  game.append(containerQuiz);
  containerQuiz.appendChild(quizTitle);
  containerQuiz.appendChild(questionCount);
  containerQuiz.appendChild(mathQuestion);
  containerQuiz.appendChild(solutions);

  //buttons
  const previousButton = document.createElement("button");
  previousButton.classList.add("previous-btn");
  previousButton.innerHTML = "vorige";
  previousButton.addEventListener("click", previousMathProblem);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.innerHTML = "volgende";
  nextButton.addEventListener("click", nextMathProblem);

  game.append(previousButton);
  game.append(nextButton);

};


// mathProblems.forEach((mathProblem) => quiz(mathProblem));
// mathProblems.forEach((mathProblem) => console.log(mathProblems.indexOf(mathProblem)));
setInterval(quiz(quizQuestion),1000);



