const mathProblems = [
  {
    question: "what is 49 - 32",
    correct_answer: 17,
    incorrect_answer: [13, -17, 16, 697],
    all_answers: [17, 13, -17, 16, 697],
  },
  {
    question: "what is 70 - 14",
    correct_answer: 56,
    incorrect_answer: [18, 39, 79, 34],
    all_answers: [18, 39, 56, 79, 34],
  },
  {
    question: "what is 80 - 15",
    correct_answer: 65,
    incorrect_answer: [74, 93, 40, 975],
    all_answers: [74, 65, 93, 40, 975],
  },
  {
    question: "what is 10 - 20",
    correct_answer: -10,
    incorrect_answer: [-350, -15, -34, -34],
    all_answers: [-350, -10, -15, -34, -34],
  },
  {
    question: "what is 56 + 11",
    correct_answer: 67,
    incorrect_answer: [102, 37, 44, 50],
    all_answers: [102, 37, 67, 44, 50],
  },
  {
    question: "what is 21 + 16",
    correct_answer: 5,
    incorrect_answer: [170, 18, 2, 26],
    all_answers: [5, 170, 18, 2, 26],
  },
];

let score = 0;
let count = 1;

const quiz = (mathProblem) => {
  //container quiz
  const containerQuiz = document.createElement("div");
  containerQuiz.classList.add("container-quiz");

  //title
  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz-title");
  quizTitle.innerHTML = "Math Problem";

  //quest counter

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
  // let solutionOptions = mathProblem.correct_answer + ',' + mathProblem.incorrect_answer;

  mathProblem.all_answers.forEach((answer) => {
    const questionBar = document.createElement("li");
    questionBar.classList.add("question-bar");
    questionBar.innerText = answer;
    questionBar.addEventListener("click", selectQuestion);

    if (answer === mathProblem.correct_answer) {
      questionBar.setAttribute("data-answer", "correct");
      questionBar.setAttribute("Value", mathProblem.correct_answer);
      questionBar.setAttribute("id", "correctAnswer");
    } else {
      questionBar.setAttribute("data-answer", "incorrect");
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

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.innerHTML = "volgende";

  game.append(previousButton);
  game.append(nextButton);

  // const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
  // // console.log(allQuestions);
  // allQuestions.forEach((question) => questionBar.removeEventListener("click", questionChecker));
};

mathProblems.forEach((mathProblem) => quiz(mathProblem));

function selectQuestion() {
  const questionSelection = this;
  // const correctAnswer = document.getElementById("correctAnswer");
  const correctAnswer = document.querySelectorAll("[data-answer='correct']");
  console.log(correctAnswer);

  if (questionSelection.dataset.answer === "correct") {
    questionSelection.classList.add("correct-answer");

  } else if (questionSelection.dataset.answer === "incorrect") {
    questionSelection.classList.add("incorrect-answer");
    correctAnswer.classList.add("correct-answer");

  } else {
    console.log("error");
  }
}

// function highlight(){
//  const correctAnswer = this.target.dataset.answer(correct)
//  console.log(correctAnswer);
// }

// highlight();

// function questionChecker() {
//   const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
//   console.log(allQuestions);
//   // allQuestions.forEach((question) => questionBar.removeEventListener("click", questionChecker));
//   // if (questionBar.getAttribute === ("correct_answer")) {
//   //   questionBar.classList.add("correct-answer")
//   // }
//   // else{
//   //   questionBar.classList.add("incorrect-answer")
//   // }
// }

///if you click correct answer turn green
///if you click wrong answer turn red and highlight the correct answer
