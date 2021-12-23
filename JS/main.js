// import {quiz} from "./modules/quiz.js"
const game = document.getElementById("game");
const ButtonQuiz = () => {
  const title = document.createElement("h1");
  title.classList.add("h1-quiz");
  title.innerText = "Math Quiz"
  const startBtn = document.createElement("button");
  startBtn.classList.add("start-btn");
  startBtn.innerText = "Start";
  game.append(title);
  game.append(startBtn);
  startBtn.addEventListener("click", function () {
    (async () => {
      try {
        let app = await import("./modules/quiz.js");
  
        startBtn.classList.add("display-none");
        title.classList.add("display-none");
      } catch (error) {
        console.log(error);
      }
    })();
  });
};
ButtonQuiz();





