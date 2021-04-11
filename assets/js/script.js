var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('welcome');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var startBtn = document.getElementById('start');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
// Starting score
var score = 0;



// Quiz questions array with the correct answers
var questions = [
    {
        question: "What tag can be used to insert a line break or blank line in an HTML document?",
        choiceA: "<br></br>",
        choiceB: "<body></body>",
        choiceC: "<head></head>",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        choiceA: "Computer Shared Sheets",
        choiceB: "Cascading Style Sheets",
        choiceC: "Customers Sounds Stupid",
        correct: "B"
    }, {
        question: "What's the correct tag for the largest heading?",
        choiceA: "Heading",
        choiceB: "Head",
        choiceC: "H1",
        correct: "C"
    }, {
        question: "What's the correct tag to make text bold?",
        choiceA: "B",
        choiceB: "bold",
        choiceC: "Bld",
        correct: "B"
    }, {
        question: "What are the CSS properties that are used to add space around sections of content?",
        choiceA: "Cleaner",
        choiceB: "Spacing",
        choiceC: "Padding",
        correct: "C"
    }, {
        question: "True or False: Is is not possible to make a webpage that adapts to different size screens.",
        choiceA: "True",
        choiceB: "False",
        choiceC: "Trick Question",
        correct: "B"
    }, {
        question: "What kind of JS statement is used to execute actions based on a trigger or condition?",
        choiceA: "Conditional Statement",
        choiceB: "Boolean Variable",
        choiceC: "Fired Event",
        correct: "A"
    }, {
        question: "In JS, what element is used to store and manipulate text?",
        choiceA: "Strings",
        choiceB: "Arrays",
        choiceC: "Variables",
        correct: "A"
    }, {
        question: "In JS, what element is used to store multiple values in a single variable?",
        choiceA: "Strings",
        choiceB: "Arrays",
        choiceC: "Variables",
        correct: "B"
    }, {
        question: "What is the format called for storing and transporting data?",
        choiceA: "JSON",
        choiceB: "Syntax",
        choiceC: "HTML",
        correct: "A"
    }
];

// Loop for every question
function questionsArray() {

    for (var i = 0; i < questions.length; i++) {
        renderQuestion();
        if (response === questions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Sorry, wrong answer");
        }
    }
};

function renderQuestion() {
    var q = questions[i].question;
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

startBtn.onclick = startQuiz;

// start quiz 
function startQuiz() {
    mainEl.remove();
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    quizTimer();
}

// Timer that counts down from 60
function quizTimer() {
    var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

        }
    }, 1000);
}

function displayMessage() {
    alert("Time is up! Let's see how you scored");
}

// function checkAnswer(answer) {
//     if (answer === questions[runningQuestion].correct) {
//         // answer is correct
//         score++;
//     }
//     count = 0;
//     if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         renderQuestion();
//     } else {
//         // end the quiz 
//         // Call the displayMessage() function
//         displayMessage();
//         clearInterval(timeInterval);
//     }
// }











