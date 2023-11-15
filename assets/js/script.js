const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const submitButton = document.getElementById('submit');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
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
    console.log(questions);
    startButton.addEventListener('click', startGame);
});

function startGame() {
    console.log("startGame");
    console.log(questions);
    //Eddy code below
    var questionOneOptionOne = questions[0].option1;
    var questionOneOptionTwo = questions[0].option2;
    var questionOneOptionThree = questions[0].option3;
    var questionOneOptionFour = questions[0].option4;
    // console.log(questions[0].option1, "heeerrrreee")
    document.getElementById("optionOne").innerText = questionOneOptionOne;
    document.getElementById("optionTwo").innerText = questionOneOptionTwo;
    document.getElementById("optionThree").innerText = questionOneOptionThree;
    document.getElementById("optionFour").innerText = questionOneOptionFour;
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    submitButton.classList.remove('hide');
    setNextQuestion();
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




function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrong() {
    let incrementWrong = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;
}