

const quizLayout = () => {
    //container quiz
    const containerQuiz = document.createElement("div");
    containerQuiz.classList.add("container-quiz");

    //title
    const genreTitle = document.createElement("div");
    genreTitle.classList.add("quiz-title");
    genreTitle.innerHTML = "Math Problem";
    

    //quest counter
    const questionCounter = document.createElement("div")
    questionCounter.classList.add("question-counter");
    questionCounter.innerHTML = "1/10";
    //show question number instead of 1/10

    //question
    const question = document.createElement("div")
    question.classList.add("question");
    question.innerHTML = "What is 21 - 16";

    //multiple choice list
    const solutions = document.createElement("ul")
    solutions.classList.add("solutions");
    
    //multiple choice list items
    const solutionOption1 = document.createElement("li")
    solutionOption1.classList.add("solution-Option")
    solutionOption1.innerHTML = "170";

    const solutionOption2 = document.createElement("li")
    solutionOption2.classList.add("solution-Option")
    solutionOption2.innerHTML = "18";

    const solutionOption3 = document.createElement("li")
    solutionOption3.classList.add("solution-Option")
    solutionOption3.innerHTML = "5";

    const solutionOption4 = document.createElement("li")
    solutionOption4.classList.add("solution-Option")
    solutionOption4.innerHTML = "2";

    const solutionOption5 = document.createElement("li")
    solutionOption5.classList.add("solution-Option")
    solutionOption5.innerHTML = "26";

    //multiple Option list counter
    // const solutionNumber1 = document.createElement("h3");
    // solutionNumber1.classList.add("solution-number-left")
    // solutionNumber1.innerHTML = "1";

    // const solutionNumber2 = document.createElement("h3");
    // solutionNumber2.classList.add("solution-number-right")
    // solutionNumber2.innerHTML = "2";





    

    //add to container
    game.append(containerQuiz);
    containerQuiz.appendChild(genreTitle);
    containerQuiz.appendChild(questionCounter);
    containerQuiz.appendChild(question);
    containerQuiz.appendChild(solutions);
    // solutions.append(solutionNumber);
    solutions.appendChild(solutionOption1);
    solutions.appendChild(solutionOption2);
    solutions.appendChild(solutionOption3);
    solutions.appendChild(solutionOption4);
    solutions.appendChild(solutionOption5);

    

}

quizLayout();