import { user } from "./userData.js";
import { mathProblems } from "./mathProblems.js";
import { selectQuestion } from "./functions.js";
import { checkAnswered } from "./functions.js";
// import {nextMathProblem} from "./functions.js"
// import {previousMathProblem} from "./functions.js"

const amountMathProblems = mathProblems.length;
const firstMathProblem = mathProblems[mathProblems.length - mathProblems.length] ;
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
  quizRender.classList.add("quiz-render")
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
  questionCount.innerHTML = `${user["userCurrentQuestion"] + 1}/${mathProblems.length}`;

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
  game.append(quizRender);
  quizRender.append(containerQuiz);
  containerQuiz.appendChild(quizTitle);
  containerQuiz.appendChild(questionCount);
  containerQuiz.appendChild(mathQuestion);
  containerQuiz.appendChild(solutions);

  //buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container")
  const previousButton = document.createElement("button");
  previousButton.classList.add("previous-btn");
  previousButton.innerHTML = "vorige";
  previousButton.addEventListener("click", previousMathProblem);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.innerHTML = "volgende";
  nextButton.addEventListener("click", nextMathProblem);

  quizRender.append(buttonContainer);
  buttonContainer.appendChild(previousButton);
  buttonContainer.appendChild(nextButton);
};

// mathProblems.forEach((mathProblem) => quiz(mathProblem));
// mathProblems.forEach((mathProblem) => console.log(mathProblems.indexOf(mathProblem)));
// setInterval(quiz(quizQuestion),1000);
quiz(quizQuestion);


function nextMathProblem() {
  let currentQuiz =  user["userCurrentQuestion"]
  let nextQuizIndex = ++currentIndex;
  quizQuestion = mathProblems[nextQuizIndex];

if (nextQuizIndex === 0){
  nextQuizIndex = nextQuizIndex + 1;
  quizQuestion = mathProblems[nextQuizIndex];
  quiz(quizQuestion);
  removeQuiz(currentQuiz);


}
else if (nextQuizIndex === amountMathProblems ){
  const nextButton = document.querySelector(".next-btn")
  nextButton.removeEventListener("click",nextMathProblem);
  
}

else{
  quiz(quizQuestion);
  removeQuiz(currentQuiz);

}
  console.log("next");
 
}

function previousMathProblem() {
  let currentQuiz =  user["userCurrentQuestion"];
  let previousQuizIndex = --currentIndex;
  quizQuestion = mathProblems[previousQuizIndex];

  if (previousQuizIndex === amountMathProblems - 1 ){
    previousQuizIndex = previousQuizIndex - 1;
    quizQuestion = mathProblems[previousQuizIndex];

    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  
  }
  else if (previousQuizIndex === -1 ){
    const previousButton = document.querySelector(".previous-btn")
    previousButton.removeEventListener("click",previousMathProblem);
    
  }
  
  else{
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  console.log(currentQuiz);
  }
  console.log("previous");
 
  highlightAnswer()
}

function removeQuiz(currentQuiz) {
  let quizRender = document.querySelector(".quiz-render");
  if (quizRender.dataset.index == currentQuiz) {
    quizRender.remove();
  } else {
    console.log("full");
  }

}


function highlightAnswer(){
  const allQuestions = Array.from(document.querySelectorAll(".question-bar"));

  const answeredQuestions = user.selectedAnswers;
  // const values = answeredQuestions.values();
  // console.log(values);
  console.log(answeredQuestions);


  for (const value of answeredQuestions) {
    let answerValue = value;
    console.log(answerValue);
  }

  answeredQuestions.forEach((question) => {
    if (question.value == 17) {
    
      console.log(answeredQuestions);
    

      console.log('yes');
    }
    else {
      console.log('error check answered');
    }
  });

}

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