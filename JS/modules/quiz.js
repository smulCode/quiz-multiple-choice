import { user } from "./userData.js";
import { mathProblems } from "./mathProblems.js";
import { selectQuestion } from "./functions.js";

const amountMathProblems = mathProblems.length;
let currentIndex = 0;
let quizQuestion = mathProblems[currentIndex];
let count = user["userCurrentQuestion"];

export const quiz = (mathProblem) => {
  user["userCurrentQuestion"] = mathProblems.indexOf(mathProblem);

  const quizRender = document.createElement("div");
  quizRender.classList.add("quiz-render");
  quizRender.setAttribute("data-index", mathProblems.indexOf(mathProblem));

  const containerQuiz = document.createElement("div");
  containerQuiz.classList.add("container-quiz");

  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz-title");
  quizTitle.innerHTML = "Math Problem";

  const questionCount = document.createElement("div");
  questionCount.classList.add("question-count");
  questionCount.innerHTML = `${user["userCurrentQuestion"] + 1}/${
    mathProblems.length
  }`;

  const mathQuestion = document.createElement("div");
  mathQuestion.classList.add("math-question");
  mathQuestion.innerHTML = `what is ${mathProblem.question}`;

  const solutions = document.createElement("ul");
  solutions.classList.add("solutions");

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

  game.append(quizRender);
  quizRender.append(containerQuiz);
  containerQuiz.appendChild(quizTitle);
  containerQuiz.appendChild(questionCount);
  containerQuiz.appendChild(mathQuestion);
  containerQuiz.appendChild(solutions);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  const previousButton = document.createElement("button");
  previousButton.classList.add("previous-btn");
  previousButton.innerHTML = "Previous";

  if (currentIndex >= 1) {
    previousButton.addEventListener("click", previousMathProblem);
  }
  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.innerHTML = "Next";
  nextButton.addEventListener("click", nextMathProblem);

  if (currentIndex === amountMathProblems - 1) {
    nextButton.removeEventListener("click", nextMathProblem);
  }

  if (
    currentIndex === amountMathProblems - 1 &&
    currentIndex === user.selectedAnswers.length
  ) {
    nextButton.addEventListener("click", getResult);
  }
  quizRender.append(buttonContainer);
  buttonContainer.appendChild(previousButton);
  buttonContainer.appendChild(nextButton);
};

quiz(quizQuestion);

function nextMathProblem() {
  let currentQuiz = user["userCurrentQuestion"];
  let nextQuizIndex = ++currentIndex;
  quizQuestion = mathProblems[nextQuizIndex];

  if (nextQuizIndex === 0) {
    nextQuizIndex = nextQuizIndex + 1;
    quizQuestion = mathProblems[nextQuizIndex];
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  } else {
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  }

  highlightSavedAnswer();
  removeClickEvent();
}

function previousMathProblem() {
  let currentQuiz = user["userCurrentQuestion"];
  let previousQuizIndex = --currentIndex;
  quizQuestion = mathProblems[previousQuizIndex];

  if (previousQuizIndex === amountMathProblems) {
    previousQuizIndex = previousQuizIndex - 1;
    quizQuestion = mathProblems[previousQuizIndex];
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  } else if (previousQuizIndex < 0) {
    previousQuizIndex = 0;
    const previousButton = document.querySelector(".previous-btn");
    previousButton.removeEventListener("click", previousMathProblem);
  } else {
    quiz(quizQuestion);
    removeQuiz(currentQuiz);
  }

  highlightSavedAnswer();
  removeClickEvent();
}

function removeClickEvent() {
  const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
  if (currentIndex < user.savedAnswers.length) {
    allQuestions.forEach((question) =>
      question.removeEventListener("click", selectQuestion)
    );
  }
}

function removeQuiz(currentQuiz) {
  let quizRender = document.querySelector(".quiz-render");
  if (quizRender.dataset.index == currentQuiz) {
    quizRender.remove();
  }
}

function getResult() {
  let quizRender = document.querySelector(".quiz-render");
  const correctAnswers = user.correctAnswers;
  quizRender.remove();
  const resultWindow = document.createElement("div");
  resultWindow.classList.add("result-window");
  resultWindow.innerHTML = `Congratulations! <br> you got ${correctAnswers} of the ${amountMathProblems} correct`;

  const restartButton = document.createElement("button");
  restartButton.classList.add("restart-btn");
  restartButton.innerHTML = "restart";
  restartButton.addEventListener("click", restartQuiz);

  resultWindow.appendChild(restartButton);
  game.append(resultWindow);
}

function restartQuiz() {
  const resultWindow = document.querySelector(".result-window");
  resultWindow.remove();
  user.correctAnswers = 0;
  user.incorrectAnswers = 0;
  user.selectedAnswers = [];
  user.userCurrentQuestion = 0;
  user.savedAnswers = [];
  user.savedAnswersData = [];
  user.savedAnswersIndex = [];
  currentIndex = 0;
  quiz(mathProblems[0]);
}

function highlightSavedAnswer() {
  const question = document.querySelectorAll(".question-bar");

  if (
    mathProblems[currentIndex].correct_answer == user.savedAnswers[currentIndex]
  ) {
    question.forEach((q) => {
      if (user.savedAnswers[currentIndex] == eval(q.innerHTML)) {
        q.style.background = "greenyellow";
      }
    });
  } else {
    question.forEach((q) => {
      if (user.savedAnswers[currentIndex] == eval(q.innerHTML)) {
        q.style.background = "red";
      }
    });
  }
}
