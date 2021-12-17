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

let user = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  selectedAnswers: [],
  userCurrentQuestion:0,

};

// let score = 0;

const amountMathProblems = mathProblems.length;
let count = 1;
let currentIndex = 0;
let mathProblemNr = 0 ;
let quizQuestion = mathProblems[mathProblemNr];


const quiz = (mathProblem) => {
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




function currentMathProblemIndex() {
  let currentIndex = user["userCurrentQuestion"];
  console.log(currentIndex);
  
}



function selectQuestion() {
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

function showCorrectAnswer() {
  const questBar = document.querySelectorAll(".question-bar");
  // console.log(questBar);
  Array.from(questBar).forEach(function (element, index) {
    if (element.dataset.answer === "correct") {
      // console.log(index);
      element.classList.add("correct-answer");
    }
  });
}

function checkAnswered() {
  const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
  allQuestions.forEach((question) => {
    if (question.dataset.user === "userCorrect") {
      user.selectedAnswers.push(question.value);
      user["correctAnswers"] = user["correctAnswers"] + 1 || 1;
      // console.log(user);
    } else if (question.dataset.user === "userIncorrect") {
      user.selectedAnswers.push(question.value);
      user["incorrectAnswers"] = user["incorrectAnswers"] + 1 || 1;
      // console.log(user);
    } else {
      // console.log('error check answered');
    }
  });
}

function nextMathProblem() {
  currentMathProblemIndex();
mathProblemNr = mathProblemNr + 1;
quizQuestion = mathProblems[mathProblemNr];

quiz(quizQuestion)
  console.log("next");

  
}

function previousMathProblem() {

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


