import {user} from "./userData.js"

export function currentMathProblemIndex() {
    let currentIndex = user["userCurrentQuestion"];
    console.log(currentIndex);
    
  }
  
  export function selectQuestion() {
    const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
  
    const questionSelection = this;
  
    if (questionSelection.dataset.answer === "correct") {
      questionSelection.classList.add("correct-answer");
      questionSelection.setAttribute("data-user", "userCorrect");
  
    } else if (questionSelection.dataset.answer === "incorrect") {
      questionSelection.classList.add("incorrect-answer");
      questionSelection.setAttribute("data-user", "userIncorrect");
      showCorrectAnswer();
    } 
    else {
      console.log("error");
    }
    checkAnswered();
    allQuestions.forEach((question) =>
      question.removeEventListener("click", selectQuestion)
    );
  }
  
  export function showCorrectAnswer() {
    const questBar = document.querySelectorAll(".question-bar");
    // console.log(questBar);
    Array.from(questBar).forEach(function (element, index) {
      if (element.dataset.answer === "correct") {
        // console.log(index);
        element.classList.add("correct-answer");
      }
    });
  }
  
  export function checkAnswered() {
    const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
    allQuestions.forEach((question) => {
      if (question.dataset.user === "userCorrect") {
        user.selectedAnswers.push(question.value);
        user["correctAnswers"] = user["correctAnswers"] + 1 || 1;
        console.log(user);
      } else if (question.dataset.user === "userIncorrect") {
        user.selectedAnswers.push(question.value);
        user["incorrectAnswers"] = user["incorrectAnswers"] + 1 || 1;
        console.log(user);
      } else {
        // console.log('error check answered');
      }
    });
  }
  
  export function nextMathProblem() {
    currentMathProblemIndex();
  mathProblemNr = mathProblemNr + 1;
  quizQuestion = mathProblems[mathProblemNr];
  
  quiz(quizQuestion)
    console.log("next");
  
    
  }
  
  export function previousMathProblem() {
  
    console.log("previous");
  }
  
  //on nextbtn click show next problem
  //onclick next look for indexCurrentProblem
  //if current index is not last problem show next problem
  //if current index is last problem check if al allQuestions are answered
  //if all question are answered count correct answers and show at finish
  
  //on previousbtn click show previous problem//
  //onclick previous look for indexCurrentProblem
  //if current index is not first problem show previous problem
  //if current index is first problem stay on first
  //if question are answered ,show answered questions
  
  
  //when I click start quiz loads in 
  
  
  