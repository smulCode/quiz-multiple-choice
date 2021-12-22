import { user } from "./userData.js";
import { mathProblems } from "./mathProblems.js";
import { selectQuestion } from "./functions.js";
// import { getResult } from "./functions.js";
// import {nextMathProblem} from "./functions.js"
// import {previousMathProblem} from "./functions.js"

const amountMathProblems = mathProblems.length;
const firstMathProblem =
  mathProblems[mathProblems.length - mathProblems.length];
const lastMathProblem = mathProblems[mathProblems.length - 1];
let currentIndex = 0;
let quizQuestion = mathProblems[currentIndex];
let count = user["userCurrentQuestion"];
// let score = 0;




export const quiz = (mathProblem) => {
  //index
  user["userCurrentQuestion"] = mathProblems.indexOf(mathProblem);
  // console.log(user);
  const quizRender = document.createElement("div");
  quizRender.classList.add("quiz-render");
  quizRender.setAttribute("data-index", mathProblems.indexOf(mathProblem));

  //container quiz
  const containerQuiz = document.createElement("div");
  containerQuiz.classList.add("container-quiz");

  //title
  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz-title");
  quizTitle.innerHTML = "Math Problem";

  //quest count

  const questionCount = document.createElement("div");
  questionCount.classList.add("question-count");
  questionCount.innerHTML = `${user["userCurrentQuestion"] + 1}/${
    mathProblems.length
  }`;

  //question

  const mathQuestion = document.createElement("div");
  mathQuestion.classList.add("math-question");
  mathQuestion.innerHTML = `what is ${mathProblem.question}`;

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
      questionBar.setAttribute("Value", eval(mathProblem.correct_answer));
    } else {
      questionBar.setAttribute("data-answer", "incorrect");
      questionBar.setAttribute("value", questionBar.innerHTML);
    }

    solutions.append(questionBar);
  });

  //add to container
  game.append(quizRender);
  quizRender.append(containerQuiz);
  containerQuiz.appendChild(quizTitle);
  containerQuiz.appendChild(questionCount);
  containerQuiz.appendChild(mathQuestion);
  containerQuiz.appendChild(solutions);

  //buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  const previousButton = document.createElement("button");
  previousButton.classList.add("previous-btn");
  previousButton.innerHTML = "Previous";
  if (currentIndex >= 1){
    previousButton.addEventListener("click", previousMathProblem);
  }

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.innerHTML = "Next";
  nextButton.addEventListener("click", nextMathProblem);


  if (currentIndex  === amountMathProblems - 1 ) {
    nextButton.removeEventListener("click", nextMathProblem);
  } 

  if (currentIndex === amountMathProblems - 1 && currentIndex === user.selectedAnswers.length){
    nextButton.addEventListener("click", getResult)
  }
  quizRender.append(buttonContainer);
  buttonContainer.appendChild(previousButton);
  buttonContainer.appendChild(nextButton);
};
//if question.remove ===
// mathProblems.forEach((mathProblem) => quiz(mathProblem));
// mathProblems.forEach((mathProblem) => console.log(mathProblems.indexOf(mathProblem)));
// setInterval(quiz(quizQuestion),1000);
quiz(quizQuestion);



function nextMathProblem() {
  let currentQuiz = user["userCurrentQuestion"];
  let nextQuizIndex = ++currentIndex;
  quizQuestion = mathProblems[nextQuizIndex];
// console.log(currentIndex);
  if (nextQuizIndex === 0) {
    nextQuizIndex = nextQuizIndex + 1;
    quizQuestion = mathProblems[nextQuizIndex];
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  } else {
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  }
  console.log("next");

}

function previousMathProblem() {
  let currentQuiz = user["userCurrentQuestion"];
  let previousQuizIndex = --currentIndex;
  quizQuestion = mathProblems[previousQuizIndex];
  ;

  if (previousQuizIndex === amountMathProblems) {
    previousQuizIndex = previousQuizIndex - 1;
    quizQuestion = mathProblems[previousQuizIndex];
console.log(previousQuizIndex);
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  } 
  
  else if (previousQuizIndex < 0) {
    previousQuizIndex = 0;
    const previousButton = document.querySelector(".previous-btn");
    previousButton.removeEventListener("click", previousMathProblem);
  } else {
    quiz(quizQuestion);
    removeQuiz(currentQuiz);

  }
  console.log("previous");

  showSavedAnswers()
}

function removeQuiz(currentQuiz) {
  let quizRender = document.querySelector(".quiz-render");
  if (quizRender.dataset.index == currentQuiz) {
    quizRender.remove();
  } else {
    console.log("full");
  }
}



function showSavedAnswers() {
  const allQuestions = Array.from(document.querySelectorAll(".question-bar"));

//   console.log(allQuestions);
// console.log(user.savedAnswersData);
// console.log(user.savedAnswersIndex);

const savedData = user.savedAnswersData
const answerData = [];

const [answer, answersIndex] = user.savedAnswersData;
// console.log(answer);
// console.log(answersIndex);

savedData.forEach((data) => {
   answerData.push(data);
  // console.log(answerData);
  
  })
  allQuestions.forEach((question, index) => {
    // console.log(`${question.value}, ${index}`);
// console.log(question.innerHTML);
// console.log(savedData);
// console.log(answer[answersIndex]);


    if (savedData[answersIndex] === question.value){
      // console.log('yes');
      // console.log(savedData[answersIndex]);
      question.classList.add("correct-answer")
      allQuestions.forEach((question) =>
      question.removeEventListener("click", selectQuestion)
    );
    }
    else if (savedData[answersIndex] == question.innerHTML) {
      // console.log('no');
      // console.log(savedData[index]);
      question.classList.add("incorrect-answer")
      allQuestions.forEach((question) =>
      question.removeEventListener("click", selectQuestion));
    }
    else{
      // console.log("error");
    }
  })

}



// //

//if (typeofAnswer !=== undefined){
//
// }
//for each question

//show answer selectedAnswers
// if userCurrentQuestion has same value as currentQuestion color background and remove click event

// function clickedAnswers() {
//   const selectedAnswers = user["selectedAnswers"];

//   // if (selectedAnswers === )
//   Array.from(selectedAnswers).forEach(function (selectedAnswer, index) {

//     if (selectedAnswer === math["correct_answer"]) {

//       console.log('green');
//     }
//     else {
//       // selectedAnswer.classList.add("incorrect-answer");

//       console.log('red');
//     }
//   });

// }

//


///saveAnswer value



function getResult(){
  let quizRender = document.querySelector(".quiz-render")
  const correctAnswers = user.correctAnswers;
  console.log('correctAnswers')
 quizRender.remove();
 const resultWindow = document.createElement("div");
 resultWindow.classList.add("result-window");
 resultWindow.innerHTML = `Congratulations! <br> you got ${correctAnswers} of the ${amountMathProblems} correct`;

 const restartButton = document.createElement("button");
 restartButton.classList.add("restart-btn");
 restartButton.innerHTML = "restart";
 restartButton.addEventListener("click", restartQuiz)

 resultWindow.appendChild(restartButton);
 game.append(resultWindow);


}

function restartQuiz(){
  const resultWindow = document.querySelector(".result-window");
  resultWindow.remove()
  user = {

    correctAnswers: 0,
    incorrectAnswers: 0,
    selectedAnswers: [],
    userCurrentQuestion:0,
    savedAnswers:[],
    savedAnswersData:[],
    savedAnswersIndex:[],

  
  };
  quiz(quizQuestion)
  }

  