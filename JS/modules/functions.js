import { user } from "./userData.js";

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

  checkAnswered();
  allQuestions.forEach((question) =>
    question.removeEventListener("click", selectQuestion)
  );
}

export function showCorrectAnswer() {
  const questBar = document.querySelectorAll(".question-bar");

  Array.from(questBar).forEach(function (correct, index) {
    if (correct.dataset.answer === "correct") {
      correct.classList.add("correct-answer");
    }
  });
}

export function checkAnswered() {
  const allQuestions = Array.from(document.querySelectorAll(".question-bar"));
  allQuestions.forEach((question, index) => {
    if (question.dataset.user === "userCorrect") {
      user.selectedAnswers.push(question.value);
      user.savedAnswers.push(question.value);
      user.savedAnswersData.push(question.value, index);
      user.savedAnswersIndex.push(index);

      user["correctAnswers"] = user["correctAnswers"] + 1 || 1;
    } else if (question.dataset.user === "userIncorrect") {
      user.selectedAnswers.push(question.value);
      user.savedAnswers.push(question.value);
      user.savedAnswersData.push(question.value, index);
      user.savedAnswersIndex.push(index);
      user["incorrectAnswers"] = user["incorrectAnswers"] + 1 || 1;
    }
  });
}
