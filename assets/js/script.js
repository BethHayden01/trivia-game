const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const submitButton = document.getElementById('submit')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    submitButton.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer() {

}

const questions = [{
    question: 'What is the name for a Robot in Star Wars?',
    answers: [{
            text: 'Droid',
            correct: true
        },
        {
            text: 'Bot',
            correct: false
        },
        {
            text: 'Robot',
            correct: false
        },
        {
            text: 'Machine',
            correct: false
        }
    ]
}]