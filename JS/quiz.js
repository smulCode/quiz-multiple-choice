const solutionOptions = [170, 18, 5, 2, 26];

const quizLayout = () => {
  //container quiz
  const containerQuiz = document.createElement("div");
  containerQuiz.classList.add("container-quiz");

  //title
  const genreTitle = document.createElement("div");
  genreTitle.classList.add("quiz-title");
  genreTitle.innerHTML = "Math Problem";

  //quest counter
  const questionCounter = document.createElement("div");
  questionCounter.classList.add("question-counter");
  questionCounter.innerHTML = "1/6";
  //show question number instead of 1/10

  //question
  const question = document.createElement("div");
  question.classList.add("question");
  question.innerHTML = "What is 21 - 16";

  //multiple choice list
  const solutions = document.createElement("ul");
  solutions.classList.add("solutions");

  //multiple choice list items

  solutionOptions.forEach((option) => {
    const questionBar = document.createElement("li");
    questionBar.classList.add("question-bar");
    const questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.innerHTML = option;

    solutions.append(questionBar);
    questionBar.append(questionText);
  });

  //add to container
  game.append(containerQuiz);
  containerQuiz.appendChild(genreTitle);
  containerQuiz.appendChild(questionCounter);
  containerQuiz.appendChild(question);
  containerQuiz.appendChild(solutions);
};

quizLayout();
