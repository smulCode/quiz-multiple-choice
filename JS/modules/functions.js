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
      console.log(user);
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
    Array.from(questBar).forEach(function (correct, index) {
      if (correct.dataset.answer === "correct") {
        // console.log(index);
        correct.classList.add("correct-answer");
      }
    });
  }
  
  export function checkAnswered() {
    const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
    allQuestions.forEach((question,index) => {
      if (question.dataset.user === "userCorrect") {
        user.selectedAnswers.push(question.value)
        user.savedAnswers.push(question.value)
        user.savedAnswersData.push(question.value,index)
        user.savedAnswersIndex.push(allQuestions[index]);

 
        user["correctAnswers"] = user["correctAnswers"] + 1 || 1;
  
        console.log(user);
      } else if (question.dataset.user === "userIncorrect") {
  
        user.selectedAnswers.push(question.value);
        user.savedAnswers.push(question.value);
        user.savedAnswersData.push(question.value,index);
        user.savedAnswersIndex.push(allQuestions[index]);
        user["incorrectAnswers"] = user["incorrectAnswers"] + 1 || 1;
       
        console.log(user);
      } else {
        // console.log('error check answered');
      }
    });
  }
  
 