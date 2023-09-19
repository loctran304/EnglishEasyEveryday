const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const quitBtn = document.querySelector('.quitBtn');

const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const alert2 = document.querySelector('.alert2');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer


// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;



// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent =currentQuestionIndex+1+"/"+questionsLimit+ ". "+ questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (document.querySelectorAll('.selected').length > 0) {
                document.querySelectorAll('.selected').forEach(el => {
                  el.classList.remove('selected');
                })
            }
            choiceDiv.classList.add('selected');
        });
    }

    if(currentQuestionIndex < questionsLimit){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    

    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert2(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsLimit) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${questionsLimit}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

const displayAlert2 = (msg) => {
    alert2.style.display = "block";
    alert2.textContent = msg;
    setTimeout(()=>{
        alert2.style.display = "none";
    }, 2000);
}




// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            timeOut();
        }
    }
    timerID = setInterval(countDown, 1000);
}

const timeOut = () => {
    
    timeLeft = 15;
    currentQuestionIndex++;
        stopTimer();
        questionBox.textContent = "";
        choicesBox.textContent = "";
        scoreCard.textContent = `You Scored ${score} out of ${questionsLimit}!`;
        displayAlert2("Time Out!");
        nextBtn.textContent = "Play Again";
        quizOver = true;
        timer.style.display = "none";
}


// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=questionsLimit-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    currentQuestionIndex = 0;
    startQuiz();
});


quitBtn.addEventListener('click', () => { 
    nextBtn.textContent = "Next";   
    startBtn.style.display = "block";
    container.style.display = "none";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    quizOver = false;
    score = 0;
    stopTimer();
    
});


nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});