const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const submitButton = document.getElementById('submit');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const optionBtns = document.getElementsByClassName('btn__option')
// console.log(optionBtns);
const option1Answer = document.getElementById('optionOne');
const option2Answer = document.getElementById('optionTwo');
const option3Answer = document.getElementById('optionThree');
const option4Answer = document.getElementById('optionFour');
let questions = [];
let currentQuestionIndex = 0;
async function fetchQuizData() {
    const res = await fetch("assets/js/json/quiz-data.json");
    gotQuestions = await res.json();
    questions = Object.values(gotQuestions)[0];
}
//function will run after startGame
document.addEventListener('DOMContentLoaded', function () {
    fetchQuizData();
    startButton.addEventListener('click', startGame);
    option1Answer.addEventListener("click", questionOneQuiz);
    option2Answer.addEventListener("click", questionOneQuiz);
    option3Answer.addEventListener("click", questionOneQuiz);
    option4Answer.addEventListener("click", questionOneQuiz);
});

function startGame() {
    displayQuestion(currentQuestionIndex)
    //Eddy code below
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    submitButton.classList.remove("hide");
}
const displayQuestion = (questionIndex) => {
    var questionOneOptionOne = questions[questionIndex].option1;
    var questionOneOptionTwo = questions[questionIndex].option2;
    var questionOneOptionThree = questions[questionIndex].option3;
    var questionOneOptionFour = questions[questionIndex].option4;
    // console.log(questions[0].option1, "heeerrrreee")
    document.getElementById("optionOne").innerText = questionOneOptionOne;
    document.getElementById("optionTwo").innerText = questionOneOptionTwo;
    document.getElementById("optionThree").innerText = questionOneOptionThree;
    document.getElementById("optionFour").innerText = questionOneOptionFour;
};
const questionOneQuiz = function (e) {
    console.log(e.target.innerText);
    console.log("questionOneQuiz");
    // console.log(index);
    // optionBtns[index].addEventListener("click", function () {
    //   console.log("click");
    // });
    // questions = Object.values(gotQuestions)[currentQuestionIndex];
    // var questionOneOptionTwo = questions[0].option2;
    // console.log(questionOneOptionTwo);
    if (e.target.innerText === questions[currentQuestionIndex].answer) {
        console.log("That is correct!");
        alert("Well done! That answer was correct!");
    } else {
        // (questionOneOptionOne, questionOneOptionThree, questionOneOptionFour === "Obi-wan Kenobi", "Emperor Palpatine", "Count Dooku");
    }
    console.log("So close! But that answer is wrong");
    alert("So close! But that answer is wrong")
}

function setNextQuestion() {
    // resetState()
    console.log(currentQuestionIndex);
    // console.log(Object.values(questions)[0])
    console.log(questions[0]);
    showQuestion(Object.values(questions)[currentQuestionIndex]);
    currentQuestionIndex++;
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    for (let i = 0; i < question.answers; i++) {
        const answer = question.answers[i];
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    }
}

function correctAnswer() {
    answerButtonsElement.addEventListener('click');
    console.log("your mom");
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrong() {
    let incrementWrong = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}