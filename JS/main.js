import("./quiz.js")
const game = document.getElementById("game");





const ButtonQuiz = () => {
  console.log("yes");
  const startBtn = document.createElement("button");
  startBtn.classList.add("start-btn");
  startBtn.innerText = "Start Quiz";
  game.append(startBtn);


  // startBtn.addEventListener("click", function () {
  //   (async () => {
  //     try {
  //       let app = await import("./quiz.js");
  //       console.log("startgame");
  
  //       startBtn.classList.add("display-none");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // });
};

ButtonQuiz();




